import React from 'react';
import ReactDOM from 'react-dom';
import logoimage from '../images/logoimage.png';
import carouselimage from '../images/carousel.png';
import educationloan from '../images/education loan.png';
import studentinsurance from '../images/student insurance.png';
import healthcard from '../images/health card.png';
import elearning from '../images/e learning.png';
import admissionhotline from '../images/admission hotline.png';
import informative from '../images/informative.png';
import onlinetests from '../images/online test.png';
import aptitutetest from '../images/aptitude test.png';
import searchtutor from '../images/search tutor.png';
import bag from '../images/bag.png';
import books from '../images/books.png';
import bottles from '../images/bottles.png';
import sports from '../images/sports.png';
import toys from '../images/toys.png';
import stationary from '../images/stationary.png';
import uniform from '../images/uniforms.png';
import shoes from '../images/shoes.png';
import off from '../images/off.png';
import physicsbook from '../images/physicsbook.png';
import school_uniform from '../images/school_uniform.png';
import logo from '../images/logo.png';
import admissions from '../images/admissions.png';
import playschool from '../images/playschool.png';
import school from '../images/school.png';
import coaching from '../images/coaching.png';
import college from '../images/college.png';
import skills from '../images/skills.png';
import tutor from '../images/tutor.png';
import workshops from '../images/workshops.png';
import {RaisedButton, Dialog, PasswordField, Snackbar, AutoComplete, TextField, Paper, AppBar, Drawer, MenuItem, IconButton, FlatButton, Toolbar, ToolbarGroup} from 'material-ui';
import {Grid,Row,Col,Image,Carousel,ButtonToolbar,Button, Modal, Tabs, Tab} from 'react-bootstrap';
import PayFeesDrawer from './PayFeesDrawer.js';
import LoginSignup from './LoginSignupButton.js';
import Cookies from 'js-cookie';
import classes from '../index.css';
var $ = require ('jquery');

var Book = React.createClass({

	render: function() {

			const styles = {

				row:  {
					backgroundColor: '#ECF3F9',
				},
				bookp:{
					'padding-left':'2em',
					'width':'60%'
				},
				book: {
					'padding-top':'2em',
					'padding-bottom':'2em',
				},
				h4: {
					'text-align':'center',
					'color':'#518FCA'
				},
				h2: {
					'text-align':'right'
				},
				h3: {
					'text-align':'left',
					'color':'#9B9C9F'
				},
				bookhead: {
					'background-color':'#E0E7EC',
					'text-align':'center',
					'font-size':'2em'
				}
			}

		return (

			<div>
				<Grid bsClass="container-fluid">
					<Row style={styles.row}>
						<Col xs="12" md="12" style={styles.bookhead}>BOOKS</Col>
					</Row>
					<Row style={styles.row}>
						<Col xs="12" md="3" style={styles.book}>
						<Row>
						<center><Image src={physicsbook} style={styles.bookp} width="100%" /></center>
						</Row>
						<Row>
						<h4 style={styles.h4}>PHYSICS NCERT BOOK</h4>
						</Row>
						<Row>
						<Col xs="12" md="6">
						<h2 style={styles.h2}>&#8377; 800</h2>
						</Col>
						<Col xs="12" md="6">
						<h3 style={styles.h3}><del>&#8377; 800</del></h3>
						</Col>
						</Row>
						</Col>
						<Col xs="12" md="3" style={styles.book}>
						<Row>
						<center><Image src={physicsbook} style={styles.bookp} width="100%" /></center>
						</Row>
						<Row>
						<h4 style={styles.h4}>PHYSICS NCERT BOOK</h4>
						</Row>
						<Row>
						<Col xs="12" md="6">
						<h2 style={styles.h2}>&#8377; 800</h2>
						</Col>
						<Col xs="12" md="6">
						<h3 style={styles.h3}><del>&#8377; 800</del></h3>
						</Col>
						</Row>
						</Col>
						<Col xs="12" md="3" style={styles.book}>
						<Row>
						<center><Image src={physicsbook} style={styles.bookp} width="100%" /></center>
						</Row>
						<Row>
						<h4 style={styles.h4}>PHYSICS NCERT BOOK</h4>
						</Row>
						<Row>
						<Col xs="12" md="6">
						<h2 style={styles.h2}>&#8377; 800</h2>
						</Col>
						<Col xs="12" md="6">
						<h3 style={styles.h3}><del>&#8377; 800</del></h3>
						</Col>
						</Row>
						</Col>
						<Col xs="12" md="3" style={styles.book}>
						<Row>
						<center><Image src={physicsbook} style={styles.bookp} width="100%" /></center>
						</Row>
						<Row>
						<h4 style={styles.h4}>PHYSICS NCERT BOOK</h4>
						</Row>
						<Row>
						<Col xs="12" md="6">
						<h2 style={styles.h2}>&#8377; 800</h2>
						</Col>
						<Col xs="12" md="6">
						<h3 style={styles.h3}><del>&#8377; 800</del></h3>
						</Col>
						</Row>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}

});

var Discount = React.createClass({

	render: function() {

			const styles = {

				row:  {
				},
				discount: {
					'padding-top':'2em',
					'padding-bottom':'2em',
					'padding-left':'5em',
					'padding-right':'5em'
				},
				line: {
					'background-color':'#D4DAE0'
				}
			}

		return (

			<div>
				<Grid bsClass="container-fluid">
					<Row style={styles.row}>
						<Col xs="12" md="12" style={styles.line}/>
					</Row>
					<Row style={styles.row}>
						<Col xs="12" md="3" style={styles.discount}>
						<Row>
						<Image src={off} width="100%" />
						</Row>
						</Col>
						<Col xs="12" md="3" style={styles.discount}>
						<Row>
						<Image src={off} width="100%" />
						</Row>
						</Col>
						<Col xs="12" md="3" style={styles.discount}>
						<Row>
						<Image src={off} width="100%" />
						</Row>
						</Col>
						<Col xs="12" md="3" style={styles.discount}>
						<Row>
						<Image src={off} width="100%" />
						</Row>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}

});

var Uniform = React.createClass({

	render: function() {

			const styles = {

				row:  {
					backgroundColor: '#ECF3F9',
				},
				uniform: {
					'padding-top':'2em',
					'padding-right':'2em',
					'padding-bottom':'2em',
					'padding-left':'2em'
				},
				h4: {
					'text-align':'center',
					'color':'#518FCA'
				},
				h2: {
					'text-align':'right'
				},
				h3: {
					'text-align':'left',
					'color':'#9B9C9F'
				},
				uniformhead: {
					'background-color':'#E0E7EC',
					'text-align':'center',
					'font-size':'2em'
				}
			}

		return (

			<div>
				<Grid bsClass="container-fluid">
					<Row style={styles.row}>
						<Col xs="12" md="12" style={styles.uniformhead}>UNIFORMS</Col>
					</Row>
					<Row style={styles.row}>
						<Col xs="12" md="3" style={styles.uniform}>
						<Row>
						<Image src={school_uniform} width="100%" />
						</Row>
						<Row>
						<h4 style={styles.h4}>DPS School Uniform</h4>
						</Row>
						<Row>
						<Col xs="12" md="6">
						<h2 style={styles.h2}>&#8377; 800</h2>
						</Col>
						<Col xs="12" md="6">
						<h3 style={styles.h3}><del>&#8377; 800</del></h3>
						</Col>
						</Row>
						</Col>
						<Col xs="12" md="3" style={styles.uniform}>
						<Row>
						<Image src={school_uniform} width="100%" />
						</Row>
						<Row>
						<h4 style={styles.h4}>DPS School Uniform</h4>
						</Row>
						<Row>
						<Col xs="12" md="6">
						<h2 style={styles.h2}>&#8377; 800</h2>
						</Col>
						<Col xs="12" md="6">
						<h3 style={styles.h3}><del>&#8377; 800</del></h3>
						</Col>
						</Row>
						</Col>
						<Col xs="12" md="3" style={styles.uniform}>
						<Row>
						<Image src={school_uniform} width="100%" />
						</Row>
						<Row>
						<h4 style={styles.h4}>DPS School Uniform</h4>
						</Row>
						<Row>
						<Col xs="12" md="6">
						<h2 style={styles.h2}>&#8377; 800</h2>
						</Col>
						<Col xs="12" md="6">
						<h3 style={styles.h3}><del>&#8377; 800</del></h3>
						</Col>
						</Row>
						</Col>
						<Col xs="12" md="3" style={styles.uniform}>
						<Row>
						<Image src={school_uniform} width="100%" />
						</Row>
						<Row>
						<h4 style={styles.h4}>DPS School Uniform</h4>
						</Row>
						<Row>
						<Col xs="12" md="6">
						<h2 style={styles.h2}>&#8377; 800</h2>
						</Col>
						<Col xs="12" md="6">
						<h3 style={styles.h3}><del>&#8377; 800</del></h3>
						</Col>
						</Row>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}

});

var Shop = React.createClass({

	render: function() {

		const styles = {
			row:
			{
				backgroundColor: '#ECF3F9',
			},
			line: {
				'background-color':'#D4DAE0'
			},
			shophead: {
				'background-color':'#E0E7EC',
				'text-align':'center',
				'font-size':'2em'
			},
			leftpad: {
				'padding-left':'15%'
			}
		}
		return (
			<div>
			 <Grid bsClass="container-fluid">
				<Row style={styles.row}>
					<Col xs="12" md="12" style={styles.line}/>
				</Row>
				<Row style={styles.row}>
					<Col xs="12" md="12" style={styles.shophead}>SHOP ONLINE</Col>
				</Row>
			    <Row style={styles.row}>
			      <Col xs={12} md={1} style={styles.leftpad}>
			      </Col>
			      <Col xs={12} md={1}>
			      <Image src={books} width="150%" />
			      </Col>
			      <Col xs={12} md={1}>
			      <Image src={stationary} width="150%" />
			      </Col>
			      <Col xs={12} md={1}>
			      <Image src={uniform} width="150%" />
			      </Col>
			      <Col xs={12} md={1}>
			      <Image src={shoes} width="150%" />
			      </Col>
			      <Col xs={12} md={1}>
			      <Image src={bag} width="150%" />
			      </Col>
			      <Col xs={12} md={1}>
			      <Image src={bottles} width="150%" />
			      </Col>
			      <Col xs={12} md={1}>
			      <Image src={sports} width="150%" />
			      </Col>  
			      <Col xs={12} md={1}>
			      <Image src={toys} width="150%" />
			      </Col>
			    </Row>
			 </Grid>
			</div>
		);
	}

});

var DailyNeeds = React.createClass({

	render: function() {

		const styles = {
			row:
			{
				'padding-top': '1em',
				'padding-bottom':'1em',
			},
			row1:
			{
				backgroundColor:'#ECF3F9'
			},
			line: {
				'background-color':'#D4DAE0'
			},
			shophead: {
				'background-color':'#E0E7EC',
				'text-align':'center',
				'font-size':'1.7em'
			},
			leftpad: {
				'padding-left':'10%'
			}
		}
		return (
			<div>
			 <Grid bsClass="container-fluid"><br />
				<Row style={styles.row1}>
					<Col xs="12" md="12" style={styles.line}/>
				</Row>
				<Row style={styles.row1}>
					<Col xs="12" md="12" style={styles.shophead}>DAILY NEEDS</Col>
				</Row>
			    <a href="/dailyneeds" style={{'text-decoration':'none','color':'black'}}>
			    <Row style={styles.row}>
			      <Col xs={12} md={1} style={styles.leftpad}>
			      </Col>
			      <Col xs={12} md={1}>
			      <Row>
			      <Image src={searchtutor} style={{'margin-left':'1.5em','margin-bottom':'0.5em'}} width="40em" height="40em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '10dp'}}>Search Tutor</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1}>
			      <Row>
			      <Image src={aptitutetest} style={{'margin-left':'1.5em','margin-bottom':'0.5em'}} width="40em" height="40em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '10dp'}}>Aptitude Test</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1}>
			      <Row>
			      <Image style={{'margin-left':'1.5em','margin-bottom':'0.5em'}} src={onlinetests} width="35em" height="40em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '10dp'}}>Online Test</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1}>
			      <Row>
			      <Image style={{'margin-left':'1.2em','margin-bottom':'0.5em'}} src={informative} width="40em" height="40em" />
			      </Row>
			      <Row>
			      <span>Informative</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1}>
			      <Row>
			      <Image src={admissionhotline} style={{'margin-left':'2em','margin-bottom':'0.5em'}} width="40em" height="40em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '0.9em'}}>Admission Hotline</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1}  style={{'margin-left':'1.5em'}} >
			      <Row>
			      <Image style={{'margin-left':'0.8em','margin-bottom':'0.5em'}} src={elearning} width="45em" height="40em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '0.9em', 'margin-left':'0.5em'}}>E learning</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1}>
			      <Row>
			      <Image style={{'margin-top':'0.5em','margin-left':'0.5em','margin-bottom':'0.5em'}} src={healthcard} width="50em" height="35em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '0.9em'}}>Health Card</span>
			      </Row>
			      </Col>  
			      <Col xs={12} md={1}>
			      <Row>
			      <Image src={studentinsurance} style={{'margin-left':'2em','margin-bottom':'0.5em'}} width="40em" height="40em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '0.9em'}}>Student Insurance</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{'margin-left':'1.5em'}} >
			      <Row>
			      <Image src={educationloan} style={{'margin-left':'1.5em','margin-bottom':'0.5em'}} width="45em" height="40em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '0.9em'}}>Education Loan</span>
			      </Row>
			      </Col>
			    </Row>
			    </a>
			 </Grid>
			</div>
		);
	}

});

var Otp = React.createClass({

	getInitialState: function()
	{
		return {showotp: false, showsnackbar:false, otp: ''};
	},

	handleChange: function(event)
	{
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	},

	close: function()
	{
		this.setState({ showotp: false, showsnackbar: false });
	},

	open: function()
	{
		if(Cookies.get('isloggedin')!=undefined)
		{
			this.setState({ showotp: true });
			this.sendotp();
		}
		else
		this.setState({ showsnackbar: true });
	},

	sendotp: function()
	{
		var mydata={};
		var mydata={
			user_id: Cookies.get('userid')
		};

		$.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/User/call_otp',
			dataType: 'json',
			async: false,
			data: mydata,
			success: function(data)
			{
				if(data.success==true)
				{
					alert(data.message);
				}
			},
		    error: function (error) 
		    {
				alert(JSON.stringify(error));
		    }			
		});
	},

	fetchstudentdetails: function()
	{
		let t = this;

		var mydata = {
			regnum: this.props.studentregnum,
			instituteid: this.props.studentinsid,
		};

		function setstudentdata(data)
		{
			var data1=[];
			data1['p']='hehe';
			data1['studentname'] = data[0].name;
			data1['studentclass'] = data[0].class;
			data1['studentsection'] = data[0].section;
			data1['studentfees'] = data[0].fee;
			t.props.setdata(data1);
		}

		$.ajax({

			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/FeePayment/get_student_detail',
			dataType: 'json',
			async: false,
			data: mydata,
			success: function(data)
			{
				if(data.success==true)
				{
					setstudentdata(data.message);
				}
				else
				{
					alert("student data not available");
				}
			},
		    error: function (error) 
		    {
				alert(JSON.stringify(error));
		    }						
		})
	},

	verifyotp: function()
	{

		let p = this;

		var mydata={
			user_id: Cookies.get('userid'),
			otp: this.state.otp
		};

		function setstudentdata()
		{
			p.fetchstudentdetails();
			p.setState({showotp: false});
		}

		$.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/User/verify_otp',
			dataType: 'json',
			async: false,
			data: mydata,
			success: function(data)
			{
				if(data.success==true)
				{
					setstudentdata();
					alert(data.message);
				}
				else
				{
					alert("otp not matched");
				}
			},
		    error: function (error) 
		    {
				alert(JSON.stringify(error));
		    }			
		});		
	},

	render: function() {

		const styles = {

			proceed: {

				'background': '#dbe8f4',
				'width':"100%",
				'color':'#4688C7',
				'border':'none',
				'margin-top':'1em',
				'text-decoration':'underline',
				'font-size':'1.2em'
			},

			underlineFocusStyle: {
				borderColor: '#4688C7'
			},

			dialogstyle: {

				'width': '50%'
			},

			otpbtn: {
				'background': '#4688C7',
				'margin-top':'1em',
				'font-size':'1.2em',
				'padding-left':'4em',
				'padding-right':'4em'
			}

		}

		return (
			<div>
			<Snackbar
			open={this.state.showsnackbar}
			message="Please Login First"
			autoHideDuration={4000}
			onRequestClose={this.close}			
			/>
			<Dialog
			open={this.state.showotp}
			onRequestClose={this.close}
			contentStyle={styles.dialogstyle}
			>
			<center>
			<h4 style={{color: '#4688C7'}}>An OTP has been sent to your Registered Mobile Number</h4>
			<TextField
			textFieldStyle={styles.textfieldstyle}
			underlineFocusStyle={styles.underlineFocusStyle}
			onChange={this.handleChange}
			name="otp"
			hintText="Enter OTP"
			></TextField>
			<h5>Haven't Received OTP ? <a href="#" ><span style={{color: '#4688C7'}}>Resend</span></a></h5>
			<Button bsStyle="primary" style={styles.otpbtn} onClick={this.verifyotp} >Submit</Button>
			</center>
			</Dialog><br />
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span onClick={this.open} style={styles.proceed}>Get OTP</span>
			</div>
		);
	}

});

var Playschool = React.createClass({

	getInitialState : function() {		
		var p = this.getapidata();
		return { openclose: 'none', enrollmentno: '', studentname: '', studentclass: '', studentsection: '', studentfees: '', controls: false, regnum: '', locationname: '',insname: '', insid: '', data:p, institutes: ['']};
	},

	handleChange: function(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	},

	onsetstudentdata: function(data) {

		this.setState({
			studentname : data['studentname'],
			studentclass : data['studentclass'],
			studentsection : data['studentsection'],
			studentfees : data['studentfees'],
		});
	},

	handleUpdateInput : function(searchText) {
		this.setState({
			locationname: searchText,
		});
	},

	newRequest: function(chosenRequest) {
		this.setState({
			insid: chosenRequest.id,
		});
		if(chosenRequest.verified==0)
		{
			this.setState({ openclose: 'block' });
		}
		else
		{
			this.setState({ openclose: 'none' });
		}
	},

	handleUpdateInput1 : function(searchText) {
		this.setState({
			insname: searchText,
		});
	},

	fetchinstitutes: function()
	{
		var q = this.getinsdata();
		this.setState({ institutes: q });
	},

	getinsdata: function()
	{
		var mydata={};
		var data2=[];
		var mydata={
			type:'school',
			location:this.state.locationname
		};

		function do_the_stuff(data)
		{
			for(var i=0;i<data.length;i++)
			{
				var c = data[i];
				data2.push(c);
			}
		}

		$.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/FeePayment/get_institute',
			dataType: 'json',
			async: false,
			data: mydata,
			success: function(data)
			{
				var data1 = data.message;
				do_the_stuff(data1);
			},
		    error: function (error) 
		    {
				alert(JSON.stringify(error));
		    }			
		});

		return data2;
	},

	getapidata: function()
	{
		var mydata={};
		var data2=[];

		function do_the_stuff(data)
		{
			for(var i=0;i<data.length;i++)
			{
				var c = data[i].LocationName;
				data2.push(c);
			}
		}

		$.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/FeePayment/get_location',
			dataType: 'json',
			async: false,
			data: mydata,
			success: function(data)
			{
				var data1 = data.message;
				do_the_stuff(data1);
			},
		    error: function (error) 
		    {
				alert(JSON.stringify(error));
		    }			
		});

		this.setState({data: data2});
		return data2;
	},

	proceedbutfunc: function()
	{
		Cookies.set('studentfees', this.state.studentfees);
		Cookies.set('insid', this.state.insid);
		Cookies.set('insname',this.state.insname);
		Cookies.set('enrollmentno',this.state.enrollmentno);
	},

	render: function() {

		var letter = {
        padding: 10,
        margin: 10,
        backgroundColor: "#ffde00",
        color: "#333",
        display: "inline-block",
        fontFamily: "monospace",
        fontSize: "32",
        textAlign: "center"
	    };

	    const dataSourceConfig = {
		  text: 'name',
		  value: 'id',
		};

		const styles = {

			row : {
			},

			carousel: {
				height:'32.5em'
			},

			h2: {
				color:'#8E9295',
				'font-size': '2em'
			},

			floatingLabelFocusStyle: {
				color: '#4688C7',
			},

			underlineFocusStyle: {
				borderColor: '#4688C7'
			},

			textfieldstyle: {
				height:'4em',
				width:'100%',
				background:'#dbe8f4'
			},

			formstyle: {
				'padding-left':'5%',
				'padding-right':'5%',
				'padding-bottom':'2%',
				'background-color': '#dbe8f4',
				'width':'50%'
			},

			proceed: {
				
				'background': '#4688C7',
				'width':"100%",
				'margin-top':'1em',
				'font-size':'1.2em'
			},

			locationstyle: {
				'background-color':'#fff'
			},

			locationstyle1: {
				'background':'white',
				'height': '32.5em'
			}

		}

		return (
			<div>
				<Grid bsClass="container-fluid">
					<Row style={styles.row}>
						<Col xs="12" md="8">
						<Grid bsClass="container-fluid">
						<Row>
							<Col xs="12" md="6" style={styles.formstyle}>
								<Row>
								<AutoComplete
								  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
								  underlineFocusStyle={styles.underlineFocusStyle} 
						          dataSource={this.state.data}
						          onUpdateInput={this.handleUpdateInput}
						          filter={AutoComplete.fuzzyFilter}
						          openOnFocus={true}
						          name="selectlocation"
						          floatingLabelText="Select Location"
						          onClose={this.fetchinstitutes}
						          fullWidth={true}					
						        />
								</Row>
								<Row>
								<AutoComplete
								  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
								  underlineFocusStyle={styles.underlineFocusStyle} 
						          dataSource={this.state.institutes}
						          dataSourceConfig={dataSourceConfig}
						          onUpdateInput={this.handleUpdateInput1}
						          filter={AutoComplete.fuzzyFilter}
						          name="selectplayschool"
						          onNewRequest={this.newRequest}
						          openOnFocus={true}
						          floatingLabelText="Select Play School"
						          fullWidth={true}					
						        />
								</Row>
								<Row>
									<Col md="6">
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} value={this.state.enrollmentno} name="enrollmentno" onChange={this.handleChange} floatingLabelText="Enrollment Number" />
									</Col>
									<Col md="6">
									<Otp studentregnum={this.state.enrollmentno} studentinsid={this.state.insid} setdata={this.onsetstudentdata} />
									</Col>
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} value={this.state.studentname} name="studentname" onChange={this.handleChange} floatingLabelText="Student Name" />
								</Row>
								<Row>
									<Col xs="12" md="6">
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} value={this.state.studentclass} name="studentclass" onChange={this.handleChange} floatingLabelText="Class" />
									</Col>
									<Col xs="12" md="6">
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} value={this.state.studentsection} name="studentsection" onChange={this.handleChange} floatingLabelText="Section" />
									</Col>
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} value={this.state.studentfees} name="studentfees" onChange={this.handleChange} floatingLabelText="Fees" />
								</Row>
								<Row>
									<a href="/coupons"><Button bsStyle="primary" onClick={this.proceedbutfunc} style={styles.proceed} >Proceed</Button></a>
								</Row>
							</Col>
							<Col xs="12" md="6" style={styles.locationstyle1}>
								 <AutoComplete
								  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
								  underlineFocusStyle={styles.underlineFocusStyle} 
						          dataSource={this.state.data}
						          onUpdateInput={this.handleUpdateInput}
						          filter={AutoComplete.fuzzyFilter}
						          openOnFocus={true}
						          floatingLabelText="Search Location"
						          fullWidth={true}					
						        />
							</Col>
						</Row>
						</Grid>
						</Col>
						<Col xs="12" md="4">
							<Carousel className="letter" style={styles.carousel} controls={this.state.controls} >
								<Carousel.Item>
									<Image src={carouselimage} />
									<Carousel.Caption>
										<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<Image src={carouselimage} />
									<Carousel.Caption>
										<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<Image src={carouselimage} />
									<Carousel.Caption>
										<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
									</Carousel.Caption>
								</Carousel.Item>
							</Carousel>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}

});

var School = React.createClass({

	getInitialState : function() {		
		var p = this.getapidata();
		return { controls: false, searchText: '', data:p};
	},

	handleUpdateInput : function(searchText) {
		this.setState({
			searchText: searchText,
		});
	},

	getapidata: function()
	{
		var mydata={};
		var data2=[];

		function do_the_stuff(data)
		{
			for(var i=0;i<data.length;i++)
			{
				var c = data[i].LocationName;
				data2.push(c);
			}
		}

		$.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/FeePayment/get_location',
			dataType: 'json',
			async: false,
			data: mydata,
			success: function(data)
			{
				var data1 = data.message;
				do_the_stuff(data1);
			},
		    error: function (error) 
		    {
				alert(JSON.stringify(error));
		    }			
		});

		this.setState({data: data2});
		return data2;
	},

	render: function() {

		var letter = {
        padding: 10,
        margin: 10,
        backgroundColor: "#ffde00",
        color: "#333",
        display: "inline-block",
        fontFamily: "monospace",
        fontSize: "32",
        textAlign: "center"
      };
 

		const styles = {

			row : {
			},

			carousel: {
				height:'32.5em'
			},

			h2: {
				color:'#8E9295',
				'font-size': '2em'
			},

			floatingLabelFocusStyle: {
				color: '#4688C7',
			},

			underlineFocusStyle: {
				borderColor: '#4688C7'
			},

			textfieldstyle: {
				height:'4em',
				width:'100%',
				background:'#dbe8f4'
			},

			formstyle: {
				'padding-left':'5%',
				'padding-right':'5%',
				'padding-bottom':'2%',
				'background-color': '#dbe8f4',
				'width':'50%'
			},

			proceed: {
				
				'background': '#4688C7',
				'width':"100%",
				'margin-top':'1em',
				'font-size':'1.2em'
			},

			locationstyle: {
				'background-color':'#fff'
			},

			locationstyle1: {
				'background':'white',
				'height': '32.5em'
			}

		}

		return (
			<div>
				<Grid bsClass="container-fluid">
					<Row style={styles.row}>
						<Col xs="12" md="8">
						<Grid bsClass="container-fluid">
						<Row>
							<Col xs="12" md="6" style={styles.formstyle}>
								<Row>
									 <AutoComplete
									  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
									  underlineFocusStyle={styles.underlineFocusStyle} 
							          dataSource={this.state.data}
							          onUpdateInput={this.handleUpdateInput}
							          filter={AutoComplete.fuzzyFilter}
							          openOnFocus={true}
							          floatingLabelText="Select Location"
							          fullWidth={true}					
							        />
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Select School" />
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Enrollment Number" />
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Student Name" />
								</Row>
								<Row>
									<Col xs="12" md="6">
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Class" />
									</Col>
									<Col xs="12" md="6">
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Section" />
									</Col>
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Fees" />
								</Row>
								<Row>
									<a href="/transaction"><Button bsStyle="primary" style={styles.proceed} >Proceed</Button></a>
								</Row>
							</Col>
							<Col xs="12" md="6" style={styles.locationstyle1}>
								 <AutoComplete
								  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
								  underlineFocusStyle={styles.underlineFocusStyle} 
						          dataSource={this.state.data}
						          onUpdateInput={this.handleUpdateInput}
						          filter={AutoComplete.fuzzyFilter}
						          openOnFocus={true}
						          floatingLabelText="Search Location"
						          fullWidth={true}					
						        />
							</Col>
						</Row>
						</Grid>
						</Col>
						<Col xs="12" md="4">
							<Carousel className="letter" style={styles.carousel} controls={this.state.controls} >
								<Carousel.Item>
									<Image src={carouselimage} />
									<Carousel.Caption>
										<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<Image src={carouselimage} />
									<Carousel.Caption>
										<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<Image src={carouselimage} />
									<Carousel.Caption>
										<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
									</Carousel.Caption>
								</Carousel.Item>
							</Carousel>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}

});

var College = React.createClass({

	getInitialState : function() {		
		var p = this.getapidata();
		return { controls: false, searchText: '', data:p};
	},

	handleUpdateInput : function(searchText) {
		this.setState({
			searchText: searchText,
		});
	},

	getapidata: function()
	{
		var mydata={};
		var data2=[];

		function do_the_stuff(data)
		{
			for(var i=0;i<data.length;i++)
			{
				var c = data[i].LocationName;
				data2.push(c);
			}
		}

		$.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/FeePayment/get_location',
			dataType: 'json',
			async: false,
			data: mydata,
			success: function(data)
			{
				var data1 = data.message;
				do_the_stuff(data1);
			},
		    error: function (error) 
		    {
				alert(JSON.stringify(error));
		    }			
		});

		this.setState({data: data2});
		return data2;
	},

	render: function() {

		var letter = {
        padding: 10,
        margin: 10,
        backgroundColor: "#ffde00",
        color: "#333",
        display: "inline-block",
        fontFamily: "monospace",
        fontSize: "32",
        textAlign: "center"
      };
 

		const styles = {

			row : {
			},

			carousel: {
				height:'32.5em'
			},

			h2: {
				color:'#8E9295',
				'font-size': '2em'
			},

			floatingLabelFocusStyle: {
				color: '#4688C7',
			},

			underlineFocusStyle: {
				borderColor: '#4688C7'
			},

			textfieldstyle: {
				height:'4em',
				width:'100%',
				background:'#dbe8f4'
			},

			formstyle: {
				'padding-left':'5%',
				'padding-right':'5%',
				'padding-bottom':'2%',
				'background-color': '#dbe8f4',
				'width':'50%'
			},

			proceed: {
				
				'background': '#4688C7',
				'width':"100%",
				'margin-top':'1em',
				'font-size':'1.2em'
			},

			locationstyle: {
				'background-color':'#fff'
			},

			locationstyle1: {
				'background':'white',
				'height': '32.5em'
			}

		}

		return (
			<div>
				<Grid bsClass="container-fluid">
					<Row style={styles.row}>
						<Col xs="12" md="8">
						<Grid bsClass="container-fluid">
						<Row>
							<Col xs="12" md="6" style={styles.formstyle}>
								<Row>
									 <AutoComplete
									  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
									  underlineFocusStyle={styles.underlineFocusStyle} 
							          dataSource={this.state.data}
							          onUpdateInput={this.handleUpdateInput}
							          filter={AutoComplete.fuzzyFilter}
							          openOnFocus={true}
							          floatingLabelText="Select Location"
							          fullWidth={true}					
							        />
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Select College" />
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Enrollment Number" />
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Student Name" />
								</Row>
								<Row>
									<Col xs="12" md="6">
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Class" />
									</Col>
									<Col xs="12" md="6">
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Section" />
									</Col>
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Fees" />
								</Row>
								<Row>
									<a href="/transaction"><Button bsStyle="primary" style={styles.proceed} >Proceed</Button></a>
								</Row>
							</Col>
							<Col xs="12" md="6" style={styles.locationstyle1}>
								 <AutoComplete
								  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
								  underlineFocusStyle={styles.underlineFocusStyle} 
						          dataSource={this.state.data}
						          onUpdateInput={this.handleUpdateInput}
						          filter={AutoComplete.fuzzyFilter}
						          openOnFocus={true}
						          floatingLabelText="Search Location"
						          fullWidth={true}					
						        />
							</Col>
						</Row>
						</Grid>
						</Col>
						<Col xs="12" md="4">
							<Carousel className="letter" style={styles.carousel} controls={this.state.controls} >
								<Carousel.Item>
									<Image src={carouselimage} />
									<Carousel.Caption>
										<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<Image src={carouselimage} />
									<Carousel.Caption>
										<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<Image src={carouselimage} />
									<Carousel.Caption>
										<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
									</Carousel.Caption>
								</Carousel.Item>
							</Carousel>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}

});	

var Coaching = React.createClass({

	getInitialState : function() {		
		var p = this.getapidata();
		return { controls: false, searchText: '', data:p};
	},

	handleUpdateInput : function(searchText) {
		this.setState({
			searchText: searchText,
		});
	},

	getapidata: function()
	{
		var mydata={};
		var data2=[];

		function do_the_stuff(data)
		{
			for(var i=0;i<data.length;i++)
			{
				var c = data[i].LocationName;
				data2.push(c);
			}
		}

		$.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/FeePayment/get_location',
			dataType: 'json',
			async: false,
			data: mydata,
			success: function(data)
			{
				var data1 = data.message;
				do_the_stuff(data1);
			},
		    error: function (error) 
		    {
				alert(JSON.stringify(error));
		    }			
		});

		this.setState({data: data2});
		return data2;
	},

	render: function() {

		var letter = {
        padding: 10,
        margin: 10,
        backgroundColor: "#ffde00",
        color: "#333",
        display: "inline-block",
        fontFamily: "monospace",
        fontSize: "32",
        textAlign: "center"
      };
 

		const styles = {

			row : {
			},

			carousel: {
				height:'32.5em'
			},

			h2: {
				color:'#8E9295',
				'font-size': '2em'
			},

			floatingLabelFocusStyle: {
				color: '#4688C7',
			},

			underlineFocusStyle: {
				borderColor: '#4688C7'
			},

			textfieldstyle: {
				height:'4em',
				width:'100%',
				background:'#dbe8f4'
			},

			formstyle: {
				'padding-left':'5%',
				'padding-right':'5%',
				'padding-bottom':'2%',
				'background-color': '#dbe8f4',
				'width':'50%'
			},

			proceed: {
				
				'background': '#4688C7',
				'width':"100%",
				'margin-top':'1em',
				'font-size':'1.2em'
			},

			locationstyle: {
				'background-color':'#fff'
			},

			locationstyle1: {
				'background':'white',
				'height': '32.5em'
			}

		}

		return (
			<div>
				<Grid bsClass="container-fluid">
					<Row style={styles.row}>
						<Col xs="12" md="8">
						<Grid bsClass="container-fluid">
						<Row>
							<Col xs="12" md="6" style={styles.formstyle}>
								<Row>
									<AutoComplete
									  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
									  underlineFocusStyle={styles.underlineFocusStyle} 
							          dataSource={this.state.data}
							          onUpdateInput={this.handleUpdateInput}
							          filter={AutoComplete.fuzzyFilter}
							          openOnFocus={true}
							          floatingLabelText="Select Location"
							          fullWidth={true}					
							        />
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Select Coaching" />
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Enrollment Number" />
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Student Name" />
								</Row>
								<Row>
									<Col xs="12" md="6">
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Class" />
									</Col>
									<Col xs="12" md="6">
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Section" />
									</Col>
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Fees" />
								</Row>
								<Row>
									<a href="/transaction"><Button bsStyle="primary" style={styles.proceed} >Proceed</Button></a>
								</Row>
							</Col>
							<Col xs="12" md="6" style={styles.locationstyle1}>
								 <AutoComplete
								  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
								  underlineFocusStyle={styles.underlineFocusStyle} 
						          dataSource={this.state.data}
						          onUpdateInput={this.handleUpdateInput}
						          filter={AutoComplete.fuzzyFilter}
						          openOnFocus={true}
						          floatingLabelText="Search Location"
						          fullWidth={true}					
						        />
							</Col>
						</Row>
						</Grid>
						</Col>
						<Col xs="12" md="4">
							<Carousel className="letter" style={styles.carousel} controls={this.state.controls} >
								<Carousel.Item>
									<Image src={carouselimage} />
									<Carousel.Caption>
										<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<Image src={carouselimage} />
									<Carousel.Caption>
										<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<Image src={carouselimage} />
									<Carousel.Caption>
										<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
									</Carousel.Caption>
								</Carousel.Item>
							</Carousel>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}

});

var Tutor = React.createClass({

	getInitialState : function() {		
		var p = this.getapidata();
		return { controls: false, searchText: '', data:p};
	},

	handleUpdateInput : function(searchText) {
		this.setState({
			searchText: searchText,
		});
	},

	getapidata: function()
	{
		var mydata={};
		var data2=[];

		function do_the_stuff(data)
		{
			for(var i=0;i<data.length;i++)
			{
				var c = data[i].LocationName;
				data2.push(c);
			}
		}

		$.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/FeePayment/get_location',
			dataType: 'json',
			async: false,
			data: mydata,
			success: function(data)
			{
				var data1 = data.message;
				do_the_stuff(data1);
			},
		    error: function (error) 
		    {
				alert(JSON.stringify(error));
		    }			
		});

		this.setState({data: data2});
		return data2;
	},

	render: function() {

		var letter = {
        padding: 10,
        margin: 10,
        backgroundColor: "#ffde00",
        color: "#333",
        display: "inline-block",
        fontFamily: "monospace",
        fontSize: "32",
        textAlign: "center"
      };
 

		const styles = {

			row : {
			},

			carousel: {
				height:'32.5em'
			},

			h2: {
				color:'#8E9295',
				'font-size': '2em'
			},

			floatingLabelFocusStyle: {
				color: '#4688C7',
			},

			underlineFocusStyle: {
				borderColor: '#4688C7'
			},

			textfieldstyle: {
				height:'4em',
				width:'100%',
				background:'#dbe8f4'
			},

			formstyle: {
				'padding-left':'5%',
				'padding-right':'5%',
				'padding-bottom':'2%',
				'background-color': '#dbe8f4',
				'width':'50%'
			},

			proceed: {
				
				'background': '#4688C7',
				'width':"100%",
				'margin-top':'1em',
				'font-size':'1.2em'
			},

			locationstyle: {
				'background-color':'#fff'
			},

			locationstyle1: {
				'background':'white',
				'height': '32.5em'
			}

		}

		return (
			<div>
				<Grid bsClass="container-fluid">
					<Row style={styles.row}>
						<Col xs="12" md="8">
						<Grid bsClass="container-fluid">
						<Row>
							<Col xs="12" md="6" style={styles.formstyle}>
								<Row>
									 <AutoComplete
									  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
									  underlineFocusStyle={styles.underlineFocusStyle} 
							          dataSource={this.state.data}
							          onUpdateInput={this.handleUpdateInput}
							          filter={AutoComplete.fuzzyFilter}
							          openOnFocus={true}
							          floatingLabelText="Select Location"
							          fullWidth={true}					
							        />
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Select Tutor" />
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Enrollment Number" />
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Student Name" />
								</Row>
								<Row>
									<Col xs="12" md="6">
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Class" />
									</Col>
									<Col xs="12" md="6">
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Section" />
									</Col>
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Fees" />
								</Row>
								<Row>
									<a href="/transaction"><Button bsStyle="primary" style={styles.proceed} >Proceed</Button></a>
								</Row>
							</Col>
							<Col xs="12" md="6" style={styles.locationstyle1}>
								 <AutoComplete
								  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
								  underlineFocusStyle={styles.underlineFocusStyle} 
						          dataSource={this.state.data}
						          onUpdateInput={this.handleUpdateInput}
						          filter={AutoComplete.fuzzyFilter}
						          openOnFocus={true}
						          floatingLabelText="Search Location"
						          fullWidth={true}					
						        />
							</Col>
						</Row>
						</Grid>
						</Col>
						<Col xs="12" md="4">
							<Carousel className="letter" style={styles.carousel} controls={this.state.controls} >
								<Carousel.Item>
									<Image src={carouselimage} />
									<Carousel.Caption>
										<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<Image src={carouselimage} />
									<Carousel.Caption>
										<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<Image src={carouselimage} />
									<Carousel.Caption>
										<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
									</Carousel.Caption>
								</Carousel.Item>
							</Carousel>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}

});

var Admissions = React.createClass({

	getInitialState : function() {		
		var p = this.getapidata();
		return { controls: false, searchText: '', data:p};
	},

	handleUpdateInput : function(searchText) {
		this.setState({
			searchText: searchText,
		});
	},

	getapidata: function()
	{
		var mydata={};
		var data2=[];

		function do_the_stuff(data)
		{
			for(var i=0;i<data.length;i++)
			{
				var c = data[i].LocationName;
				data2.push(c);
			}
		}

		$.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/FeePayment/get_location',
			dataType: 'json',
			async: false,
			data: mydata,
			success: function(data)
			{
				var data1 = data.message;
				do_the_stuff(data1);
			},
		    error: function (error) 
		    {
				alert(JSON.stringify(error));
		    }			
		});

		this.setState({data: data2});
		return data2;
	},

	render: function() {

		var letter = {
        padding: 10,
        margin: 10,
        backgroundColor: "#ffde00",
        color: "#333",
        display: "inline-block",
        fontFamily: "monospace",
        fontSize: "32",
        textAlign: "center"
      };
 

		const styles = {

			row : {
			},

			carousel: {
				height:'32.5em'
			},

			h2: {
				color:'#8E9295',
				'font-size': '2em'
			},

			floatingLabelFocusStyle: {
				color: '#4688C7',
			},

			underlineFocusStyle: {
				borderColor: '#4688C7'
			},

			textfieldstyle: {
				height:'4em',
				width:'100%',
				background:'#dbe8f4'
			},

			formstyle: {
				'padding-left':'5%',
				'padding-right':'5%',
				'padding-bottom':'2%',
				'background-color': '#dbe8f4',
				'width':'50%'
			},

			proceed: {
				
				'background': '#4688C7',
				'width':"100%",
				'margin-top':'1em',
				'font-size':'1.2em'
			},

			locationstyle: {
				'background-color':'#fff'
			},

			locationstyle1: {
				'background':'white',
				'height': '32.5em'
			}

		}

		return (
			<div>
				<Grid bsClass="container-fluid">
					<Row style={styles.row}>
						<Col xs="12" md="8">
						<Grid bsClass="container-fluid">
						<Row>
							<Col xs="12" md="6" style={styles.formstyle}>
								<Row>
									 <AutoComplete
									  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
									  underlineFocusStyle={styles.underlineFocusStyle} 
							          dataSource={this.state.data}
							          onUpdateInput={this.handleUpdateInput}
							          filter={AutoComplete.fuzzyFilter}
							          openOnFocus={true}
							          floatingLabelText="Select Location"
							          fullWidth={true}					
							        />
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Select Admission" />
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Enrollment Number" />
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Student Name" />
								</Row>
								<Row>
									<Col xs="12" md="6">
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Class" />
									</Col>
									<Col xs="12" md="6">
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Section" />
									</Col>
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Fees" />
								</Row>
								<Row>
									<a href="/transaction"><Button bsStyle="primary" style={styles.proceed} >Proceed</Button></a>
								</Row>
							</Col>
							<Col xs="12" md="6" style={styles.locationstyle1}>
								 <AutoComplete
								  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
								  underlineFocusStyle={styles.underlineFocusStyle} 
						          dataSource={this.state.data}
						          onUpdateInput={this.handleUpdateInput}
						          filter={AutoComplete.fuzzyFilter}
						          openOnFocus={true}
						          floatingLabelText="Search Location"
						          fullWidth={true}					
						        />
							</Col>
						</Row>
						</Grid>
						</Col>
						<Col xs="12" md="4">
							<Carousel className="letter" style={styles.carousel} controls={this.state.controls} >
								<Carousel.Item>
									<Image src={carouselimage} />
									<Carousel.Caption>
										<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<Image src={carouselimage} />
									<Carousel.Caption>
										<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<Image src={carouselimage} />
									<Carousel.Caption>
										<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
									</Carousel.Caption>
								</Carousel.Item>
							</Carousel>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}

});

var Workshops = React.createClass({

	getInitialState : function() {		
		var p = this.getapidata();
		return { controls: false, searchText: '', data:p};
	},

	handleUpdateInput : function(searchText) {
		this.setState({
			searchText: searchText,
		});
	},

	getapidata: function()
	{
		var mydata={};
		var data2=[];

		function do_the_stuff(data)
		{
			for(var i=0;i<data.length;i++)
			{
				var c = data[i].LocationName;
				data2.push(c);
			}
		}

		$.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/FeePayment/get_location',
			dataType: 'json',
			async: false,
			data: mydata,
			success: function(data)
			{
				var data1 = data.message;
				do_the_stuff(data1);
			},
		    error: function (error) 
		    {
				alert(JSON.stringify(error));
		    }			
		});

		this.setState({data: data2});
		return data2;
	},

	render: function() {

		var letter = {
        padding: 10,
        margin: 10,
        backgroundColor: "#ffde00",
        color: "#333",
        display: "inline-block",
        fontFamily: "monospace",
        fontSize: "32",
        textAlign: "center"
      };
 

		const styles = {

			row : {
			},

			carousel: {
				height:'32.5em'
			},

			h2: {
				color:'#8E9295',
				'font-size': '2em'
			},

			floatingLabelFocusStyle: {
				color: '#4688C7',
			},

			underlineFocusStyle: {
				borderColor: '#4688C7'
			},

			textfieldstyle: {
				height:'4em',
				width:'100%',
				background:'#dbe8f4'
			},

			formstyle: {
				'padding-left':'5%',
				'padding-right':'5%',
				'padding-bottom':'2%',
				'background-color': '#dbe8f4',
				'width':'50%'
			},

			proceed: {
				
				'background': '#4688C7',
				'width':"100%",
				'margin-top':'1em',
				'font-size':'1.2em'
			},

			locationstyle: {
				'background-color':'#fff'
			},

			locationstyle1: {
				'background':'white',
				'height': '32.5em'
			}

		}

		return (
			<div>
				<Grid bsClass="container-fluid">
					<Row style={styles.row}>
						<Col xs="12" md="8">
						<Grid bsClass="container-fluid">
						<Row>
							<Col xs="12" md="6" style={styles.formstyle}>
								<Row>
									 <AutoComplete
									  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
									  underlineFocusStyle={styles.underlineFocusStyle} 
							          dataSource={this.state.data}
							          onUpdateInput={this.handleUpdateInput}
							          filter={AutoComplete.fuzzyFilter}
							          openOnFocus={true}
							          floatingLabelText="Select Location"
							          fullWidth={true}					
							        />
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Select Workshop" />
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Enrollment Number" />
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Student Name" />
								</Row>
								<Row>
									<Col xs="12" md="6">
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Class" />
									</Col>
									<Col xs="12" md="6">
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Section" />
									</Col>
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Fees" />
								</Row>
								<Row>
									<a href="/transaction"><Button bsStyle="primary" style={styles.proceed} >Proceed</Button></a>
								</Row>
							</Col>
							<Col xs="12" md="6" style={styles.locationstyle1}>
								 <AutoComplete
								  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
								  underlineFocusStyle={styles.underlineFocusStyle} 
						          dataSource={this.state.data}
						          onUpdateInput={this.handleUpdateInput}
						          filter={AutoComplete.fuzzyFilter}
						          openOnFocus={true}
						          floatingLabelText="Search Location"
						          fullWidth={true}					
						        />
							</Col>
						</Row>
						</Grid>
						</Col>
						<Col xs="12" md="4">
							<Carousel className="letter" style={styles.carousel} controls={this.state.controls} >
								<Carousel.Item>
									<Image src={carouselimage} />
									<Carousel.Caption>
										<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<Image src={carouselimage} />
									<Carousel.Caption>
										<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<Image src={carouselimage} />
									<Carousel.Caption>
										<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
									</Carousel.Caption>
								</Carousel.Item>
							</Carousel>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}

});

var Skills = React.createClass({

	getInitialState : function() {		
		var p = this.getapidata();
		return { controls: false, searchText: '', data:p};
	},

	handleUpdateInput : function(searchText) {
		this.setState({
			searchText: searchText,
		});
	},

	getapidata: function()
	{
		var mydata={};
		var data2=[];

		function do_the_stuff(data)
		{
			for(var i=0;i<data.length;i++)
			{
				var c = data[i].LocationName;
				data2.push(c);
			}
		}

		$.ajax({
			type: 'POST',
			url: 'http://52.41.82.157/Feeontime/index.php/FeePayment/get_location',
			dataType: 'json',
			async: false,
			data: mydata,
			success: function(data)
			{
				var data1 = data.message;
				do_the_stuff(data1);
			},
		    error: function (error) 
		    {
				alert(JSON.stringify(error));
		    }			
		});

		this.setState({data: data2});
		return data2;
	},

	render: function() {

		var letter = {
        padding: 10,
        margin: 10,
        backgroundColor: "#ffde00",
        color: "#333",
        display: "inline-block",
        fontFamily: "monospace",
        fontSize: "32",
        textAlign: "center"
      };
 

		const styles = {

			row : {
			},

			carousel: {
				height:'32.5em'
			},

			h2: {
				color:'#8E9295',
				'font-size': '2em'
			},

			floatingLabelFocusStyle: {
				color: '#4688C7',
			},

			underlineFocusStyle: {
				borderColor: '#4688C7'
			},

			textfieldstyle: {
				height:'4em',
				width:'100%',
				background:'#dbe8f4'
			},

			formstyle: {
				'padding-left':'5%',
				'padding-right':'5%',
				'padding-bottom':'2%',
				'background-color': '#dbe8f4',
				'width':'50%'
			},

			proceed: {
				
				'background': '#4688C7',
				'width':"100%",
				'margin-top':'1em',
				'font-size':'1.2em'
			},

			locationstyle: {
				'background-color':'#fff'
			},

			locationstyle1: {
				'background':'white',
				'height': '32.5em'
			}

		}

		return (
			<div>
				<Grid bsClass="container-fluid">
					<Row style={styles.row}>
						<Col xs="12" md="8">
						<Grid bsClass="container-fluid">
						<Row>
							<Col xs="12" md="6" style={styles.formstyle}>
								<Row>
									 <AutoComplete
									  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
									  underlineFocusStyle={styles.underlineFocusStyle} 
							          dataSource={this.state.data}
							          onUpdateInput={this.handleUpdateInput}
							          filter={AutoComplete.fuzzyFilter}
							          openOnFocus={true}
							          floatingLabelText="Select Location"
							          fullWidth={true}					
							        />
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Select Skill" />
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Enrollment Number" />
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Student Name" />
								</Row>
								<Row>
									<Col xs="12" md="6">
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Class" />
									</Col>
									<Col xs="12" md="6">
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Section" />
									</Col>
								</Row>
								<Row>
									<TextField style={styles.textfieldstyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelText="Fees" />
								</Row>
								<Row>
									<a href="/transaction"><Button bsStyle="primary" style={styles.proceed} >Proceed</Button></a>
								</Row>
							</Col>
							<Col xs="12" md="6" style={styles.locationstyle1}>
								 <AutoComplete
								  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
								  underlineFocusStyle={styles.underlineFocusStyle} 
						          dataSource={this.state.data}
						          onUpdateInput={this.handleUpdateInput}
						          filter={AutoComplete.fuzzyFilter}
						          openOnFocus={true}
						          floatingLabelText="Search Location"
						          fullWidth={true}					
						        />
							</Col>
						</Row>
						</Grid>
						</Col>
						<Col xs="12" md="4">
							<Carousel className="letter" style={styles.carousel} controls={this.state.controls} >
								<Carousel.Item>
									<Image src={carouselimage} />
									<Carousel.Caption>
										<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<Image src={carouselimage} />
									<Carousel.Caption>
										<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<Image src={carouselimage} />
									<Carousel.Caption>
										<p style={styles.h2}>#gocashless <br /> <br /> Get Cashback <br /><br /></p>
									</Carousel.Caption>
								</Carousel.Item>
							</Carousel>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}

});

var Content = React.createClass({


	changecontent: function(data)
	{
		this.props.changeactive(data);
	},

	render: function() {

		const styles = {
			row:
			{
			},
			leftpad: {
				'padding-left':'15%'
			}
		}
		return (
			<div>
			 <Grid bsClass="container-fluid">
			 <br />
			    <Row style={styles.row}>
			      <Col xs={12} md={1}>
			      </Col>
			      <Col xs={12} md={1}>
			      </Col>
			      <Col xs={12} md={1} style={{cursor:'pointer','margin-right':'1em'}} onClick={() => this.changecontent(<Playschool />)} >
   			      <Row>
			      <Image style={{'margin-bottom':'0.5em','margin-left':'1em'}} src={playschool} width="40%" height="40em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '10dp'}}>Play School</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{cursor:'pointer','margin-right':'1em'}} onClick={() => this.changecontent(<School />)} >
   			      <Row>
			      <Image src={school} style={{'margin-bottom':'0.5em'}} width="60%" height="40em" />
			      </Row>
			      <Row>
			      <span style={{'font-size': '1em','margin-left':'0.6em'}}>School</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{cursor:'pointer'}} onClick={() => this.changecontent(<College />)} >
   			      <Row>
			      <Image src={college} style={{'margin-bottom':'0.5em'}} width="60%" height="40em" />
   			      </Row>
			      <Row>
			      <span style={{'font-size': '1em','margin-left':'0.5em'}}>College</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{cursor:'pointer'}} onClick={() => this.changecontent(<Coaching />)} >
   			      <Row>
			      <Image src={coaching} style={{'margin-bottom':'0.5em','margin-left':'1em'}} width="40em" height="40em" />
   			      </Row>
			      <Row>
			      <span style={{'font-size': '1em','margin-left':'0.4em'}}>Coaching</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{cursor:'pointer'}} onClick={() => this.changecontent(<Tutor />)} >
   			      <Row>
			      <Image src={tutor} style={{'margin-bottom':'0.5em','margin-left':'1em'}} width="40em" height="40em" />
   			      </Row>
			      <Row>
			      <span style={{'font-size': '1em','margin-left':'1em'}}>Tutor</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{cursor:'pointer'}} onClick={() => this.changecontent(<Admissions />)} >
   			      <Row>
			      <Image src={admissions} style={{'margin-bottom':'0.5em','margin-left':'1em'}} width="40em" height="40em" />
   			      </Row>
			      <Row>
			      <span style={{'font-size': '1em','margin-left':'0.1em'}}>Admission</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1} style={{cursor:'pointer'}} onClick={() => this.changecontent(<Workshops />)} >
   			      <Row>
			      <Image src={workshops} style={{'margin-bottom':'0.5em','margin-left':'1.5em'}} width="30em" height="40em" />
   			      </Row>
			      <Row>
			      <span style={{'font-size': '10dp'}}>Workshops</span>
			      </Row>
			      </Col>  
			      <Col xs={12} md={2} style={{cursor:'pointer'}} onClick={() => this.changecontent(<Skills />)} >
   			      <Row>
			      <Image src={skills} style={{'margin-bottom':'0.5em','margin-left':'2.7em'}} width="20%" height="40em" />
   			      </Row>
			      <Row>
			      <span style={{'font-size': '1em','margin-right':'2em'}}>Skills & Employability</span>
			      </Row>
			      </Col>
			      <Col xs={12} md={1}>
			      </Col>
			    </Row><br />
			 </Grid>
			</div>
		);
	}

});

var FormGet = React.createClass({

	getInitialState: function()
	{
		return {dispform: <Playschool />};
	},

	onchangedisp: function(data)
	{
		this.setState({dispform: data});
	},

	render: function() {
	
		return (
			<div><Content changeactive={this.onchangedisp} />{this.state.dispform}</div>
		)
	}

});

var Homepage = React.createClass({

	render: function() {

		return (
			<div>
			    <PayFeesDrawer />
				<FormGet/>
				<DailyNeeds />
				<Discount />
			</div>
		);
	}

});

module.exports = Homepage;