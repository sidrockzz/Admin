import React from 'react';
import {Container,Row,Col,Button,Card,Table} from 'reactstrap';
import {DoubleRangeSlider} from './DoubleRangeSlider';
import {RangeSlider} from './Tenth';
import {Twelve} from './twelve';
import {Backlogs} from './Backlogs';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
const options = [
  { label: 'Select All', value: 1},
  { label: 'Computer Science Engineering', value: 2},
  { label: 'Electronics and Communication Engineering', value: 3},
  { label: 'Electrical and Electronics Engineering', value: 4},
  { label: 'Civil Engineering', value: 5},
  { label: 'Mechanical Engineering', value: 6},
];
// style={{maxHeight:'250px', overflow:'scroll'}}>
class AllStudents extends React.Component{
	render(){
		return(
			<Container fluid>
				<Row>
					<Col style={{fontSize:"20px",fontFamily: "Segoe UI",fontWeight:"600"}}>
					Manage Students
					</Col>
				</Row>
				<Row style={{backgroundColor:"#2A324B",color:"white"}}>
					<Col xs="6" className="p-2" style={{fontSize:"14px",fontFamily: "Segoe UI",fontWeight:"700"}}>
						<div>Search Filter</div>
					</Col>
					<Col xs="6" className="p-2" style={{fontSize:"14px",fontFamily: "Segoe UI",fontWeight:"400"}}>
						<div align="right">Total Students:<b>0</b></div>
					</Col>
				</Row>
				<Row style={{backgroundColor:"white"}}>
					<Col>
          				<form>
          					<Row class="p-2" style={{marginTop:5,fontSize:"14px",fontFamily: "Segoe UI",fontWeight:"600"}}>
          						<Col>Education Filter</Col>
          					</Row>
            				<hr style={{margin:2,marginBottom:4}}></hr>
            				<Row className="p-2" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}>	
            					<Col lg="3" md="6" xs="12">
            						<Row>
            							<Col>Degree</Col>
            						</Row>
            						<Row>
            							<Col>
            								<select name="degree" class="runningtext container p-2" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",borderColor:"#999999",color:"#999999"}}>
                            					<option value="Any">Any</option>
                            					<option value="BTech">BTech</option>
                            					<option value="MBA">MBA</option>
                        					</select>
            							</Col>
            						</Row>
            					</Col>
                                <Col lg="1" md="12" xs="12">&nbsp;</Col>
            					<Col lg="3" md="6" xs="12">
            						<Row>
            							<Col xs="12">Branch</Col>
            						</Row>
            						<Row>
            							<Col xs="12">
                        					<ReactMultiSelectCheckboxes options={options} class="container" />
            							</Col>
            						</Row>
            					</Col>
                                <Col lg="1" md="12" xs="12">&nbsp;</Col>
            					<Col lg="3" md="6" xs="12">
            						<Row>
            							<Col>CGPA(<span id="CGPA">0</span>-10)</Col>
            						</Row>
            						<Row>
            							<Col>
            								<DoubleRangeSlider/>
            							</Col>
            						</Row>
            					</Col>
                                <Col lg="1" md="12" xs="12">&nbsp;</Col>
            				</Row>
            				<Row class="p-2" style={{fontSize:"14px",fontFamily: "Segoe UI",fontWeight:"600"}}>
          						<Col style={{fontSize:15}}>Other Filter</Col>
          					</Row>
            				<hr style={{margin:2,marginBottom:4}}></hr>
            				<Row className="p-2" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}>
								<Col lg="2" md="4" xs="12">
									Batch
								</Col>
								<Col lg="3" md="8" xs="12">
                        	    	<select name="batch" class="runningtext container p-1"  style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",borderColor:"#999999",color:"#999999"}}>
                           	    		<option value="nill">No Preference</option>
                                		<option value="2016" >2016</option>
                                		<option value="2017" >2017</option>
                                		<option value="2018" >2018</option>
                                		<option value="2019" >2019</option>
                                		<option value="2020" >2020</option>
                                		<option value="2021"  >2021</option>
                            		</select>
                    			</Col>
                                <Col lg="1" md="12" xs="12">&nbsp;</Col>
									<Col lg="2" md="4" xs="12">
                        				Sort By
                        			</Col>
                        			<Col lg="3" md="8"  xs="12">
                            			<select name="sortby" class="runningtext container p-1"  style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",borderColor:"#999999",color:"#999999"}}>
                                			<option value="2">Name</option>
                                			<option value="5">Branch</option>
                                			<option value="1">Roll No</option>
                                			<option value="8">Institute marks</option>
                                			<option value="6">10th Marks</option>
                                			<option value="7">12th Marks</option>
                            			</select>
                					</Col>
                				</Row>
                				<br></br>
                    			<Row className="p-2" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}>
                					<Col lg="2" md="4" xs="12">
                    					Gender
                    				</Col>
                    				<Col lg="3" md="8" xs="12">
                            			<select class="runningtext container p-1" name="gender" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",borderColor:"#999999",color:"#999999"}}>
                                			<option value="nill">No Preference</option>
                                			<option value="M" >Male</option>
                                			<option value="F" >Female</option>
                            			</select>
                    				</Col>
                                    <Col lg="1" md="12" xs="12">&nbsp;</Col>
                    				<Col lg="2" md="4" xs="12">
                        				Eligible For Job
                        			</Col>
                        			<Col lg="3" md="8" xs="12">
                            			<select class="runningtext container p-1" name="jobeligible" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",borderColor:"#999999",color:"#999999"}}>
                                			<option value="yes">Yes</option>
                                			<option value="no">No</option>
                            			</select>
                					</Col>
                                    <Col lg="1" md="12" xs="12">&nbsp;</Col>
                				</Row>
                				<br></br>
                    			<Row className="p-2" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}>
                                    <Col lg="2" md="4" xs="12">&nbsp;
                                    </Col>
                                    <Col lg="3" md="8" xs="12">&nbsp;
                                    </Col>
                                    <Col lg="1" md="12" xs="12">&nbsp;</Col>
                        			<Col lg="2" md="4" xs="12">
										Jobs In Hand
									</Col>
                        			<Col lg="3" md="8" xs="12">
                            			<select name="jobsinhand" class="runningtext container p-1"  style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",borderColor:"#999999",color:"#999999"}}>
                                			<option value="nill">No Preference</option>
                                			<option value="0">0 jobs</option>
                                			<option value="1">less tha or equal to 1 job</option>
                                			<option value="2">less tha or equal to 2 jobs</option>
                                			<option value="3">less tha or equal to 3 jobs</option>
                                			<option value="4">less tha or equal to 4 jobs</option>
                            			</select>
                					</Col>
                                    <Col lg="1" md="12" xs="12">&nbsp;</Col>
                			</Row>
                			<Row class="p-2" style={{fontSize:"14px",fontFamily: "Segoe UI",fontWeight:"600"}}>
                                <Col style={{fontSize:15}}>Advance Filter</Col>
                            </Row>
            				<hr style={{margin:2,marginBottom:4}}></hr>
            				<Row className="p-2" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}>
								<Col lg="1" md="6" xs="12" className="p-2 pl-4">
									10th
								</Col>
								<Col lg="4" md="6" xs="12">
                        	    	<RangeSlider className="container"/>
                    			</Col>
                                <Col lg="1" md="12" xs="12">&nbsp;</Col>
								<Col lg="1" md="6" xs="12" className="p-2 pl-4">
                        			12th
                        		</Col>
                        		<Col lg="4" md="6" xs="12">
                            		<Twelve className="container"/>
                				</Col>
                                <Col lg="1" md="12" xs="12">&nbsp;</Col>
                			</Row>
                			<br></br>
                			<Row className="p-2" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}>
                    			<Col lg="1" md="6" xs="12" className="p-2 pl-4">
                        			Backlogs
                        			(never)
                        		</Col>
                        		<Col lg="4" md="6" xs="12">
                        			<Backlogs/>
                        		</Col>	
                                <Col lg="1" md="12" xs="12">&nbsp;</Col>
                        		<Col></Col>
                        		<Col></Col>
                			</Row>
                            <Row>
                                <Col align="center"><Button type="Submit" className="p-1" style={{backgroundColor:"#2A324B"}}>Submit</Button></Col>
                            </Row>
                            <Row>&nbsp;</Row>
            			</form>	
            		</Col>
            	</Row>
                <Row>&nbsp;
                </Row>
			</Container>
		);
	}
}
export default AllStudents;