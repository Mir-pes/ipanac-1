import { useState } from "react";
import "./enquire.css"; 
import {User, Mail, Phone, Calendar} from "lucide-react";  
import logo from "./assets/IpanacRelocationLogo.png";

function Enquire() {
    const [locationType, setLocationType] = useState("local");
    
    const localPlaces = ["Ajman", "Ras Al Khaimah", "Abu Dhabi", "Dubai", "Sharjah", "Fujairah", "Umm Al Quwain"];
    const internationalCountries = ["C1", "C2", "C3", "C4", "C5", "C6", "C7"];
    
    const places = locationType === "local" ? localPlaces : internationalCountries;
    
    return (        
        <div className="enquire-page">
            <div className="enquire-wrapper">
                <div className="enquire-logo-section">
                    <img src={logo} alt="IPANAC Relocation Logo" className="enquire-logo" />
                    
                    <p className="tagline">Smooth Move, Easy Relocation</p>
                </div>

                <div className="enquire-form-section">
                    <h2 className="Message" style = {{color: "red"} }>Register</h2>

                    <form className="enquire-form">
                        <div className="input-group"> 
                            <label>Name:</label>                    
                            <div className="input">   
                                                   
                                <User size={16.5}/>  
                                                       
                                <input type="text" placeholder="Full Name" required/>                         
                            </div>                     
                        </div>                   
                        
                        <div className="input-group"> 
                            <label>Email:</label>                
                            <div className="input">                         
                                <Mail size={16.5}/>                         
                                <input type="email" placeholder="Email" required/>                     
                            </div>                 
                        </div>                   
                        
                        <div className="input-group">  
                            <label>Phone No:</label>               
                            <div className="input">                         
                                <Phone size={16.5}/>                         
                                <input type="tel" placeholder="Contact Number" required/>                     
                            </div>                  
                        </div>

                        <div className="checkbox-group">
                            <label className="checkbox-label"> 
                                Origin:
                                <input 
                                    type="radio" 
                                    name="locationType" 
                                    value="local" 
                                    checked={locationType === "local"}
                                    onChange={() => setLocationType("local")}
                                    required
                                />
                                Local
                            </label>
                            
                            {/* <label className="checkbox-label">
                                <input 
                                    type="radio" 
                                    name="locationType" 
                                    value="international"
                                    checked={locationType === "international"} 
                                    onChange={() => setLocationType("international")}
                                    required
                                />
                                International
                            </label> */}
                        </div>
                        
                        <div className="input-group">  
                            <label>Base Location:</label>                   
                            <div className="input">                        
                                <select className="dropdown">
                                    <option value="">Select Origin</option>
                                    {places.map((place, index) => (
                                        <option key={index} value={place}>{place}</option>
                                    ))}
                                </select>                     
                            </div>                 
                        </div> 
                        
                        <div className="input-group">   
                            <label>Destination:</label>                  
                            <div className="input">                         
                                <select className="dropdown">
                                    <option value="">Select Destination</option>
                                    {places.map((place, index) => (
                                        <option key={index} value={place}>{place}</option>
                                    ))}
                                </select>                    
                            </div>                 
                        </div>
                        
                        <div className="input-group">  
                            <label>Expected Moving Date:</label>                   
                            <div className="input">
                                <Calendar />                         
                                <input type="date" placeholder="Expected moving date" />                     
                            </div>                 
                        </div>

                        <div className="input-group">
                            <label>Description:</label>
                            <textarea 
                                rows={3}
                                style={{ 
                                    width: '100%',
                                    padding: '12px',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                    marginTop: '8px',
                                    fontFamily: 'inherit',
                                    fontSize: '14px',
                                    minHeight: '100px'
                                }}
                                placeholder="Enter brief Description about the Products you wish to service..."
                            />
                        </div>
                                          
                        <div className="submit-container">                         
                            <button className="submit">Submit</button>                     
                        </div>                 
                    </form>
                </div>
            </div>
        </div>
    ); 
}  

export default Enquire;
