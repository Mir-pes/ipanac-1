'use strict';

const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'ap-south-1' });

// MUST be verified in SES
const SOURCE_EMAIL = 'relocation@ipanacllc.com';
const RECIPIENT_EMAIL = 'relocation@ipanacllc.com';

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { formType, formData } = body;

    if (!formType || !formData) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, message: 'Invalid request' })
      };
    }

    let subject = '';
    let html = '';

    switch (formType) {
      case 'contact':
        subject = `📩 Contact Form – ${formData.fullName}`;
        html = contactTemplate(formData);
        break;

      case 'enquire':
        subject = `📦 Enquiry Form – ${formData.fullName}`;
        html = enquireTemplate(formData);
        break;

      case 'quote':
        subject = `💰 Quote Request – ${formData.fullName}`;
        html = quoteTemplate(formData);
        break;

      default:
        throw new Error('Unknown form type');
    }

    const params = {
      Source: SOURCE_EMAIL,
      Destination: {
        ToAddresses: [RECIPIENT_EMAIL]
      },
      ReplyToAddresses: [formData.email || RECIPIENT_EMAIL],
      Message: {
        Subject: { Data: subject, Charset: 'UTF-8' },
        Body: {
          Html: { Data: html, Charset: 'UTF-8' }
        }
      }
    };

    await ses.sendEmail(params).promise();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true })
    };

  } catch (err) {
    console.error('Lambda Error:', err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ success: false, message: 'Server error' })
    };
  }
};

/* ================= EMAIL TEMPLATES ================= */

function wrap(content, title) {
  return `
  <html>
    <body style="font-family:Arial;background:#f4f6f8;padding:20px">
      <div style="max-width:600px;margin:auto;background:#ffffff;padding:20px;border-radius:6px">
        <h2 style="border-bottom:1px solid #ddd;padding-bottom:10px">${title}</h2>
        ${content}
        <p style="margin-top:20px;font-size:12px;color:#777">
          Submitted at ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Dubai' })}
        </p>
      </div>
    </body>
  </html>`;
}

function row(label, value) {
  return `<p><strong>${label}:</strong><br/>${value || '-'}</p>`;
}

function contactTemplate(d) {
  return wrap(`
    ${row('Full Name', d.fullName)}
    ${row('Email', d.email)}
    ${row('Phone', d.phone)}
    ${row('Message', d.message)}
  `, 'New Contact Form');
}

function enquireTemplate(d) {
  return wrap(`
    ${row('Full Name', d.fullName)}
    ${row('Email', d.email)}
    ${row('Phone', d.phone)}
    ${row('Relocation Type', d.relocationType)}
    ${row('Base Location', d.baseLocation)}
    ${row('Destination', d.destination)}
    ${row('Moving Date', d.movingDate)}
    ${row('Details', d.details)}
  `, 'New Enquiry Form');
}

function quoteTemplate(d) {
  return wrap(`
    ${row('Full Name', d.fullName)}
    ${row('Email', d.email)}
    ${row('Phone', d.phone)}
    ${row('Items', (d.items || []).join(', '))}
    ${row('Relocation Type', d.relocationType)}
    ${row('Base Location', d.baseLocation)}
    ${row('Destination', d.destination)}
    ${row('Moving Date', d.movingDate)}
    ${row('Details', d.details)}
  `, 'New Quote Request');
}
