import { useState } from "react";
import "./enquire.css"; 
import {User, Mail, Phone, Calendar} from "lucide-react";  

function Quote() {
    const [locationType, setLocationType] = useState("local");
    
    const localPlaces = ["Ajman", "Ras Al Khaimah", "Abu Dhabi", "Dubai", "Sharjah", "Fujairah", "Umm Al Quwain"];
    const internationalCountries = ["C1", "C2", "C3", "C4", "C5", "C6", "C7"];
    
    const places = locationType === "local" ? localPlaces : internationalCountries;
    
    return (        
        
        <form>
        <div className="container">             
            <div className="header">                 
                <h1>Register</h1>                 
            </div>             
            <div className="inputs">                 
                <div className="input-group">                     
                    <label className="name">Name:</label>                         
                    <div className="input">                             
                        <User size = {16.5}/>                             
                        <input type="text" placeholder="Enter your name"  required/>                         
                    </div>                     
                </div>                   
                <div className="input-group">                 
                    <label className="name">Email:</label>                     
                    <div className="input">                         
                        <Mail size = {16.5}/>                         
                        <input type="email" placeholder="Enter your email" required/>                     
                    </div>                 
                </div>                   
                <div className="input-group">                 
                    <label className="name">Contact No:</label>                     
                    <div className="input">                         
                        <Phone size = {16.5}/>                         
                        <input type="tel" placeholder="Enter your contact number"  required/>                     
                    </div>                  
                </div>
                
                  <div>  
                    {/* To go to next line immediately */}
                     <label className="Items">Items:</label>
                </div>

                <div className="checkbox-group1">
                    <input type = "radio"
                            name = "items"
                            value="varying"/>
                            Electronics
                </div>


                <div className="checkbox-group">
                    <input type = "radio"
                            name = "items"
                            value="varying"/>
                                Furniture
                </div>

                <div className="checkbox-group2">
                    <input type = "radio"
                            name = "items"
                            value="varying"/>
                            Option 3
                </div>

                <div className="checkbox-group3">
                    
                    <input type = "radio"
                            name = "items"
                            value="varying"/>
                            Option 4
                </div> 

                <div className="checkbox-group">
                    <label className="checkbox-label"> Origin: </label>
                        <input 
                            type="radio" 
                            name="locationType" 
                            value="local" 
                            checked={locationType === "local"}
                            onChange={() => setLocationType("local")}
                        required/>
                        Local
                    
                    <label className="checkbox-label">
                        <input 
                            type="radio" 
                            name="locationType" 
                            value="international"
                            checked={locationType === "international"} 
                            onChange={() => setLocationType("international")}
                        required/>
                        International
                    </label>
                </div>
                
                <div className="input-group">                 
                    <label className="name">Base Location:</label>                     
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
                    <label className="name">Destination:</label>                     
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
                    <label className="name">Expected moving date:</label>                     
                    <div className="input">
                        <Calendar />                         
                        <input type="date" placeholder="Select date" />                     
                    </div>                 
                </div>


                            <div className="input-group">
                            <label className="name">Description:</label>
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
                    <button className="submit">                             
                        Submit                         
                    </button>                     
                </div>                 
            </div>             
        </div>   
        </form>      
    ); 
}  

export default Quote;