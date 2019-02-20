import React from 'react';
import { Parallax, Background } from 'react-parallax';
 import './RE_Parallax.css'
 import image1 from '../assets/images/IMG_4581-169x300.jpg'; 
 import image2 from '../assets/images/IMG_5023.jpeg'; 
 //IMG_1193-1-272x182
//src="../assets/images/IMG_4713-488x650.jpeg"
//'../assets/images/IMG_0818-650x488.jpg'
import {Container,Row,Col} from 'reactstrap';
const RE_Parallax = () => (
    <div className="parallax-container">
        {/* -----basic config-----*/}
       
          {/* -----custom background element-----*/}
          <Parallax strength={300}>
          <Container>
            <Row>
                <Col sm="12" md="12" >
                <h1>Wave Dissipation System</h1>
                </Col>
            </Row>
          </Container>
          
         
            <Background className="x-custom-bg">
                <img src="../assets/images/IMG_1193-1-272x182.jpeg" alt="fill murray" />
            </Background>
        </Parallax>
 
        {/* -----dynamic blur-----*/}
        <Parallax
            blur={{ min: -55, max: 55 }}
            bgImage={require('../assets/images/IMG_1193-1-272x182.jpeg')}
            bgImageAlt="deewood"
            strength={100}
        >
             <div className="container" >
                <div className="row si-section" >   
                <Row>
                    <Col sm="12" md="12">
                    <h3 className="widget-title">About Us and the Wave Dissipation System (WDS)</h3>

                    </Col>
                </Row>
                <Row style={{marginTop:'30px'}}>
                    <div className="col-md-2">
                        
                   </div>
                    <div className="col-md-3">
                        <img src={image1} style={{boxShadow:"2px 2px 10px #000"}}  />
                   </div>
                    <div className="col-md-6">
                        <div >
                        
                            <p>Deron Nettles, a resident of Mt. Pleasant, South Carolina, invented a new method of reducing beach erosion – the Wave Dissipation System. Nettles is the sole owner of SI Seawalls &amp; Fencing Systems,LLC dba SI Systems, LLC and Wave Dissipation Systems, LLC. Wave Dissipation Systems, LLC holds all of the company’s intellectual properties.</p>
                            <p>In 2013 SI Systems, in conjunction with Dr. Timothy Mays, Ph.D., P.E. of The Citadel’s engineering department, began studying, testing, and analyzing the WDS. SI Systems and the Citadel have evaluated the system for over two years. Small prototypes were installed on South Carolina beaches before implementing full-scale systems.</p>

                        </div>
                    </div>
                    <div className="col-md-1">
                        
                        </div>
                </Row>
                  
                    
                </div>
                

            </div>
            
        </Parallax>
 
        {/* -----custom background element-----*/}
        <Parallax strength={300}>
            <div className="container">
            <div className="row si-section">
                    <div className="col-md-6">
                    <p>In 2014 SI Systems convinced the South Carolina legislature to allow the Citadel to study WDS at multiple, diverse locations along the South Carolina coast under existing erosion control statutes. Ultimately, SI Systems advocated the passage of a South Carolina statute (Senate bill S1032) making it possible for the WDS to be permitted for use if proven successful in addressing erosional issues through pilot studies.</p>
                            <p>Following the passage of this statute, SI Systems undertook a full- scale pilot project in which the WDS was installed to protect two large oceanfront condominiums buildings and nine residential homes on Isle of Palms, South Carolina and three residential homes on Harbor Island, Beaufort South Carolina. The results were positive. During its two-year evaluation, design and installation methods of the WDS were enhanced.</p>
                            <p>The WDS received 2nd Place in the 2014 NCEES Engineering National Competition. (http:// ncees.org/wp-content/uploads/2014/06/ Citadel.pdf). In 2016 the South Carolina Department of Health and Environmental Control (“DHEC”) and Ocean Coastal Resource Management (“OCRM”) which regulate all coastal areas of South Carolina hired a third party to evaluate the WDS. GEL Engineering, LLC was chosen to perform the monitoring report and concluded that the WDS was successful in addressing erosional issues. GEL’s coastal engineer’s independent evaluation of WDS concurred with the findings by Dr. May of the Citadel.</p>
                            <p>The WDS received 2nd Place in the 2014 NCEES Engineering National Competition. (http:// ncees.org/wp-content/uploads/2014/06/ Citadel.pdf). In 2016 the South Carolina Department of Health and Environmental Control (“DHEC”) and Ocean Coastal Resource Management (“OCRM”) which regulate all coastal areas of South Carolina hired a third party to evaluate the WDS. GEL Engineering, LLC was chosen to perform the monitoring report and concluded that the WDS was successful in addressing erosional issues. GEL’s coastal engineer’s independent evaluation of WDS concurred with the findings by Dr. May of the Citadel.</p>
                            <img src={image2} style={{height:"500px",marginTop:"30px",boxShadow:"2px 2px 10px #000"}} />
                    </div>
                    <div className="col-md-6">    
                            <p><strong>I. What is a Wave Dissipation System?</strong> </p><p>The Wave Dissipation System (“WDS”) is an alternative to other methods currently used to protect (or restore) beaches, dunes, and structures. Those options typically include: sandbags, beach scraping, and beach re-nourishment. Additional hardened erosion-control devices such as seawalls and rock revetments that were installed along the coast in the past are heavily regulated and are now mostly illegal for use in new applications. The WDS, however, in most applications will be considered a soft technology, temporary and removable, making it legal for protecting against erosion in new applications.</p>
                            <p><strong>II. What are the components of the WDS and its current and potential applications?</strong> </p><p>The WDS consists of three main components: 1) 10″ FRP piles; 2) housing units; and, 3) multiple panel types (circular tubes, trapezoid, and triangle shaped panels). 10″ octagonal FRP piles provide the main support of the system. Housing units slide over the FRP piles. Housing units made of high-density polyethylene plastic provide support for the horizontal panels. The panels made of high strength PVC slide in the housing units which are designed to dissipate the wave energy. The WDS is a dynamic system that can be used to protect the shores of oceans, lakes, rivers, and creeks. It can also be used inland as a trip wall to slow storm surges. WDS can be quickly installed and dismantled with limited labor and equipment and minimal impact. It has a smaller footprint than other erosion-control devices, is aesthetically pleasing, and does not impede beach access for the public. The WDS can be installed for long term or for short term protection, and can be stored and reused. Although the WDS was originally designed for beach protection, there are a number of alternative applications (such as temporary fencing) which the WDS could be applied to successfully with minor design changes.</p>
                            <p><strong>III. How does the cost of the WDS compare to other erosion control methods?</strong> </p><p>The WDS is significantly less expensive than alternatives. For example, the owners of Ocean Club Villas Condominiums (“Ocean Club”) saved approximately $415,000 over one year by installing a WDS instead of a larger footprint of sandbags. Moreover, Ocean Club’s savings will continue as the WDS can be reused where sandbags deteriorate and must be replaced on a regular basis.</p>
                            <p><strong>IV. What is the WDS’s primary purpose and why is it better than other options?</strong> </p><p>he WDS’s primary purpose is to dissipate erosion-causing wave energy. The WDS’s flexibility allows it to be adjusted to site-specific locations and to adapt to changing adverse environments. Beaches experience ebb and flow of erosion and accretion. During periods of accretion the WDS allows sand to move landward of the system while reducing damaging wave energy. During periods of erosion beaches have no downward drift of sand. The WDS can be installed to protect in these conditions by using different types of panels to retain backfilled sand. Multiple tiers or rows of the WDS can also be installed in extreme conditions to filter damaging wave energy. After initial installments, the system can be lowered and raised at the same time to address lowering beach elevations. The WDS is also designed to be turtle friendly. During turtle nesting periods the panels can be removed which allows turtles to access nesting sites landward of the WDS. &nbsp;</p>
                        
                    </div>
                    
                </div>

            </div>
            <Background className="x-custom-bg">
                <img src="../assets/images/IMG_4713-488x650.jpeg" alt="fill murray" />
            </Background>
        </Parallax>
        
 
        {/* -----renderProp: "renderLayer"-----*/}
        <Parallax
            bgImage={'../assets/images/IMG_0856.jpeg'}
            strength={400}
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',
                        background: `rgba(255, 255, 255, ${percentage * 1})`,
                        left: '50%',
                        top: '50%',
                        width: percentage * 500,
                        height: percentage * 500,
                    }}
                />
            )}
        >
            
        </Parallax>
    </div>
);
export default RE_Parallax;