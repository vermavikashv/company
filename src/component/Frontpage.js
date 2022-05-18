
import React, { useState,createRef, useEffect } from 'react'
import { useStyles } from './frontpageStyle'
import {Select,MenuItem,Button,Avatar,Checkbox,TextField} from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import {postData,getData} from "../FetchServices"


export default function Frontpage(){
    const classes=useStyles()
    var productsSlider=createRef()
    const[bedroom,setBedroom]=useState(0)
    const[bathroom,setBathroom]=useState(0)
    const[balcony,setBalcony]=useState(0)
    const[floor,setFloor]=useState(0)
    const[rparking,setRparking]=useState(0)
    const[oparking,setOparking]=useState(0)
    const[post,setPosted]=useState('')
    const[Package,setPackage]=useState('')
    const[property,setProperty]=useState([])




    const fetchproperty = async () => {
      var result = await getData(`https://homexp.in/Api/PropertyType`);
      console.log(result)
      setProperty(result.result);
      alert(result)
    };
  
    // const fillproperty = () => {
    //   return property.map((item) => {
    //     return <MenuItem value={item.name}>{item.name}</MenuItem>;
    //   });
    // };
  
useEffect(function(){
  fetchproperty()
},[])




    const handleSubmit = async () => {
      var formData = new FormData()
      formData.append('bedrooms',bedroom)
      formData.append('bathrooms',bathroom)
      formData.append('post',post)
      formData.append('package',Package)
  
      
      var result = await postData(`https://homexp.in/Api/PostProperty`,formData)
      if(result.st=="fail"){
       alert('fail')
       
      }
    }




    var Productsettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
       
      };



    const showMainProduct=()=>{
        
        return (
        <div>
           
       <img src="/rent.png" width="200px" height="100px"/>
     
       <img src="/rent.png" width="200px" height="100px"/>
      
       <img src="/rent.png" width="200px" height="100px"/>
      
       <img src="/rent.png" width="200px" height="100px"/>
       </div>
        
        
        
        )
        
        
       
        
        
        }





    return(
        <div className={classes.root}>
          <div className={classes.subdiv}>
            <div>
            <h1> Sell or Rent Your Property </h1>
            </div>
            <div>
            <h3>This data will be saved for your future application</h3>
            </div>
            <div>
                <img src="/rent.png" width='200px' height='200px'/>
            </div>
            <div >
            <h3 style={{marginRight:"300px"}} >Select Packages</h3>
            <div>
                <Select style={{width:"350px",height:"30px"}}> 
                <MenuItem >Sliver</MenuItem>

                </Select>
            </div>
            <div style={{marginTop:"10px"}}>
            <Button variant="outlined" onClick={(event)=>setPackage(event.target.value)} value="sale">Sale</Button>
            <Button variant="outlined" onClick={(event)=>setPackage(event.target.value)} value="Rent" >Rent</Button>
            <Button variant="outlined" onClick={(event)=>setPackage(event.target.value)} value="Farmhouse">Farmhouse</Button>
            <Button variant="outlined" onClick={(event)=>setPackage(event.target.value)} value="Auction">Auction</Button>
            </div>

            
            </div>
            <div >
            <h3 style={{marginRight:"350px"}} >Posted By</h3>
            </div>
            <div >
            <Button onClick={(event)=>setPosted(event.target.value)} value="Agent" variant="outlined" style={{marginRight:"30px"}}>Agent</Button>
            <Button onClick={(event)=>setPosted(event.target.value)} value="Owner" variant="outlined"  style={{marginRight:"30px"}}>Owner</Button>
            <Button onClick={(event)=>setPosted(event.target.value)} value="Bulider" variant="outlined" style={{marginRight:"30px"}}>Bulider</Button>
            </div>

            <div >
            <h3 style={{marginRight:"220px"}} >Locality/Project/Landmark</h3>
            </div>
            <div>
                <TextField
                 InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <IconButton>
                          <SearchIcon onClick={()=>alert('Search')}/>
                        </IconButton>
                      </InputAdornment>
                    )
                  }}/>
            </div>

            <div >
            <h3 style={{marginRight:"330px"}} >Property Type</h3>
            </div>
            <div>
                <Select style={{width:"350px",height:"30px",marginRight:"90px"}}> 
                {/* {fillproperty()} */}
                

                </Select>
            </div>

            <div style={{ display: 'flex', flexDiraction: "row", justifyContent: "space-between" }}>
            <div>
                    <h3 style={{marginRight:"95px"}}>Bedrooms</h3>
                    <Button onClick={() => setBedroom(bedroom - 1)} style={{ background: "black", color: "white", height: "50px" }}>-</Button> {bedroom}

                    <Button onClick={() => setBedroom(bedroom + 1)} style={{ background: "black", color: "white", height: "50px", marginLeft: "5px" }} >+</Button>
                </div>
                <div>
                    <h3>Bathroom</h3>
                    <Button onClick={() => setBathroom(bathroom - 1)} style={{ background: "black", color: "white", height: "50px" }}>-</Button> {bathroom}

                    <Button onClick={() => setBathroom(bathroom + 1)} style={{ background: "black", color: "white", height: "50px", marginLeft: "5px" }} >+</Button>
                </div>
</div>


<div style={{ display: 'flex', flexDiraction: "row", justifyContent: "space-between" }}>
            <div>
                    <h3 style={{marginRight:"95px"}}>Balcony</h3>
                    <Button onClick={() => setBalcony(balcony - 1)} style={{ background: "black", color: "white", height: "50px" }}>-</Button> {balcony}

                    <Button onClick={() => setBalcony(balcony + 1)} style={{ background: "black", color: "white", height: "50px", marginLeft: "5px" }} >+</Button>
                </div>
                <div>
                    <h3>No. of Floor</h3>
                    <Button onClick={() => setFloor(floor - 1)} style={{ background: "black", color: "white", height: "50px" }}>-</Button> {floor}

                    <Button onClick={() => setFloor(floor + 1)} style={{ background: "black", color: "white", height: "50px", marginLeft: "5px" }} >+</Button>
                </div>
</div>
            
<div >
            <h3 style={{marginRight:"330px"}} >Super Area</h3>
            </div>
            <div style={{margin:"10px",width:"400px"}}>
            <TextField fullWidth
                    placeholder="Carpet Area"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment>
                                <Select value="sq.ft" variant="standard" displayEmpty>

                                    <MenuItem value="sq.ft" >
                                        Sq.ft
                                    </MenuItem>

                                </Select>
                            </InputAdornment>
                        )
                    }}></TextField>
                    </div><div style={{margin:"10px",width:"400px"}}>
                    <TextField fullWidth
                    placeholder="Bulidup Area"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment>
                                <Select value="sq.ft" variant="standard" displayEmpty>

                                    <MenuItem value="sq.ft" >
                                        Sq.ft
                                    </MenuItem>

                                </Select>
                            </InputAdornment>
                        )
                    }}></TextField>
                    </div><div style={{margin:"10px",width:"400px"}}>
                    <TextField fullWidth
                    placeholder="Super Bulidup Area"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment>
                                <Select value="sq.ft" variant="standard" displayEmpty>

                                    <MenuItem value="sq.ft" >
                                        Sq.ft
                                    </MenuItem>

                                </Select>
                            </InputAdornment>
                        )
                    }}></TextField>
            </div>








            <div >
            <h3 style={{marginRight:"330px"}} >Availability</h3>
            </div>
            <div>
            <Button variant="outlined" style={{marginRight:"30px"}}>Under Construction</Button>
            <Button variant="outlined"  style={{marginRight:"30px"}}>Ready To Move</Button>
           </div>


           <div >
            <h3 style={{marginRight:"330px"}} >Furnishing Status</h3>
            </div>
            <div>
            <Button variant="outlined" style={{marginRight:"30px"}}>Furnished</Button>
            <Button variant="outlined"  style={{marginRight:"30px"}}>Unfurnished</Button>
            <Button variant="outlined"  style={{marginRight:"30px"}}>Semi Furnished</Button>
           </div>


           <div style={{ display: 'flex', flexDiraction: "row", justifyContent: "space-between",padding:"5px",marigin:"5px" }}>
            <div>
                    <h3 style={{marginRight:"95px"}}>Age of Construction</h3>
                    <Select style={{width:"200px",height:"30px"}} displayEmpty> 
                <MenuItem disabled>Add age of construction</MenuItem>
                <MenuItem value="3 To 5 year">3 To 5 year</MenuItem>
                <MenuItem value="under 7 year" >under 7 year </MenuItem>

                </Select>
                </div>
                <div>
                    <h3>Facing</h3>
                    <Select style={{width:"200px",height:"30px"}} displayEmpty> 
                <MenuItem  disabled >Add facing type</MenuItem>
                <MenuItem value="sea facing" >sea facing</MenuItem>
                <MenuItem value="front facing" >front facing</MenuItem>

                </Select>
                </div>
</div>

            <div style={{ display: 'flex', flexDiraction: "row", justifyContent: "space-between" }}>
            <div>
                    <h3 style={{marginRight:"95px"}}>No. Covered Parking</h3>
                    <Button onClick={() => setRparking(rparking - 1)} style={{ background: "black", color: "white", height: "50px" }}>-</Button> {rparking}

                    <Button onClick={() => setRparking(rparking + 1)} style={{ background: "black", color: "white", height: "50px", marginLeft: "5px" }} >+</Button>
                </div>
                <div>
                    <h3>No. Open Parking</h3>
                    <Button onClick={() => setOparking(oparking - 1)} style={{ background: "black", color: "white", height: "50px" }}>-</Button> {oparking}

                    <Button onClick={() => setOparking(oparking + 1)} style={{ background: "black", color: "white", height: "50px", marginLeft: "5px" }} >+</Button>
                </div>
</div>
            <div >
            <h3 style={{marginRight:"350px"}} >Aminities</h3>
            </div>
            <div>
                <TextField
                 InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <IconButton>
                          <SearchIcon onClick={()=>alert('Search')}/>
                        </IconButton>
                      </InputAdornment>
                    )
                  }}/>
            </div>


{/* ///////////////slider///////////////// */}

            <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
              
        <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 50,
                paddingBottom: 50,
              }}
            >
       
        <ArrowBackIos onClick={()=>productsSlider.current.slickPrev()} style={{ cursor: "pointer",fontSize:42,color:'#95a5a6'}} />
        </div>
        
        <div style={{ width:'90%' }}>
          <Slider {...Productsettings}  ref={productsSlider}>
              {showMainProduct()}
          </Slider>
        </div>

        <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 50,
                paddingBottom: 50,
              }}
            >
       
        <ArrowForwardIosIcon onClick={()=>productsSlider.current.slickNext()} style={{cursor: "pointer",fontSize:42,color:'#95a5a6'}} />
        </div>
      
    
     
        </div> 
        {/* /////////////////// */}

            <div>
            <Checkbox /> By entering your personal details. You hereby'Home example' 
            </div>


<div>
    {<Button variant="contained" style={{width:'400px'}} onClick={()=>handleSubmit()}>Next</Button>}
</div>



</div>
        </div>

    )

}