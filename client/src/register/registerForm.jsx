import React, { Component } from 'react';
import './register.scss';
import fetch from '../fetchApi';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class RegisterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			wating:false,
			email: '',
			password: '',
			firstName:'',
			lastName:''
		};
	}

	componentDidMount = () => {
		
	};

	_handleLogin = () => {
		this.setState({ wating: true });
		let { email, password ,firstName,lastName} = this.state;
		fetch('api/user/register', 'POST', { email, password ,firstName,lastName})
			.then((res) => {
				this.setState({ wating: false });

				alert(JSON.stringify(res))

		
			})
			.catch((res) => {
				this.setState({ wating: false });
				alert(JSON.stringify(res.response.data))

			});
	};



	_onchange = (event) => {
		this.setState({ [event.stateName]: event.value });
	};

	render() {
			return (
				<div className="login-form-main ">
					{this.state.wating ? <div id={'overlay'} /> : ''}

					<div className=" h-100 d-flex item-center col px-2">
						<center>
							<div className="login-middle ">
								<div id="login" className="py-4">
									<AvForm onValidSubmit={this._handleLogin} className="col-7 m-0 p-0 item-center">
										<fieldset className="d-flex flex-column">
										<AvGroup>
												<div className=" d-flex flex-row">
													<span className="fa fa-user px-3" />
													<span>
														<AvInput
															placeholder={'First Name'}
															name={'firstName'}
															id="firstName"
															onChange={(e) => {
																this._onchange({
																	value: e.target.value,
																	stateName: 'firstName'
																});
															}}
															required
															value={this.state.firstName}
														/>
														<AvFeedback>firstName required</AvFeedback>
													</span>
												</div>
											</AvGroup>

											<AvGroup>
												<div className=" d-flex flex-row">
													<span className="fa fa-user px-3" />
													<span>
														<AvInput
															placeholder={'Last Name'}
															name={'lastName'}
															id="lastName"
															onChange={(e) => {
																this._onchange({
																	value: e.target.value,
																	stateName: 'lastName'
																});
															}}
															required
															value={this.state.lastName}
														/>
														<AvFeedback>lastName required</AvFeedback>
													</span>
												</div>
											</AvGroup>
										
											<AvGroup>
												<div className=" d-flex flex-row">
													<span className="fa fa-user px-3" />
													<span>
														<AvInput
															placeholder={'Email'}
															name={'email'}
															id="email"
															onChange={(e) => {
																this._onchange({
																	value: e.target.value,
																	stateName: 'email'
																});
															}}
															required
															type="email"
															value={this.state.email}
														/>
														<AvFeedback>Email required</AvFeedback>
													</span>
												</div>
											</AvGroup>
											<AvGroup>
												<div className=" d-flex ">
													<span className="fa fa-lock px-3" />
													<span>
														<AvInput
															name={'password'}
															id="password"
															type="password"
															onChange={(e) => {
																this._onchange({
																	value: e.target.value,
																	stateName: 'password'
																});
															}}
															placeholder="Password"
															value={this.state.password}
															required
														/>
														<AvFeedback>Password required</AvFeedback>
													</span>
												</div>
											</AvGroup>

											<div className="w-100 d-flex">
											<div>
												<Link to='/login' className='text-white'>Login</Link></div>
												<span className="item-center">
													<a style={{ whiteSpace: ' nowrap' }} className="login-a" href="#" />
												</span>
												<span className="">
													<input type="submit" className="px-3 login-input" value="Register" />
												</span>
												
											</div>

																
										</fieldset>
										<div className="login-clearfix" />
									</AvForm>

								</div>
							
							</div>
							
							
						</center>
					</div>
				
				</div>
			);
	
	
	}
}


export default withRouter (RegisterForm);
