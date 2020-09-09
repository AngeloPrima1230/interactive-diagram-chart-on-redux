import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap';
// import { connect } from 'react-redux'
// import { variableAdded } from '../store/VariableSlice'

// import DatePicker from 'react-datepicker';

export class Dialogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.editState.isNew,
      itemName: this.props.editState.itemName,
      currentCategory: 'primitive',
    }
  }


  dataTypeList = [
    "Int16",
    "Int32",
    "Int64",
    "Float",
    "DateTime",
    "Boolean",
    "UInt16",
    "UInt32",
    "UInt64",
    "Double",
    "Date",
    "SByte",
    "String",
    "Decimal(s,p)",
    "Single",
    "Time"
  ]

  selectCategory(event) {
    this.setState({currentCategory: event.target.value});
  }

  getSelectList() {
    let txt = {};
    switch(this.state.currentCategory){
      case 'primitive':
        txt = this.dataTypeList.map((d, inx) => <option key={inx} value={d}>{d}</option>);
        txt = (
          <select className="form-control form-control-sm" name="datatype">
            {txt}
          </select>
        )
        break;
      case 'table':
        txt = (
          <select className="form-control form-control-sm" name="datatype">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        )
        break;
      case 'object':
        txt = (
          <select className="form-control form-control-sm" name="datatype">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        )
        break;
      default:
        txt=(
          <select className="form-control form-control-sm" name="datatype">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        );
    }
    return txt;
  }

  getBusinessList() {
    return (
      <select className="form-control form-control-sm" id="business" name="business">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    );
  }

  storeVariable(event, type) {
    event.preventDefault();
    this.setState({show: false});
    const form = this.refs.varForm;
    const formData = new FormData(form);
    const obj = {};

    for (let pair of formData.entries()) {
      obj[pair[0]] = pair[1];
    }
    form.reset();

    switch(type){
      case 'ok':
        console.log(obj);
        // this.dispatch(
        //   variableAdded(obj)
        // )
        break;
      case 'delete':
        console.log('Clicked delete.');
        break;
      default:
        console.log('Clicked cancel.');
    }
   
  }

  storeTasks(event, type){
    event.preventDefault();
    this.setState({show: false});
    const form = this.refs.taskForm;
    // const formData = new FormData(form);
    // const obj = {};
    form.reset();
  }

  // componentDidMount() {
    // console.log(this.state.editState)
  // }

  // shouldComponentUpdate(nextProps, nextState){
  //   return this.nextProps.editState.isNew !== this.nextState.editState.isNew;
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevProps.editState, prevState.editState, this.state.editState);
  // }

  // UNSAFE_componentWillUpdate(nextProps, nextState) {
  //   console.log(nextProps, nextState);
  // } 

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      show: nextProps.editState.isNew,
      itemName: nextProps.editState.itemName,
    });
  }

  // <span className="text-danger">*</span>
  getModalBodyForModels(){
    return (
    <form className="form-sample">
      <div className="row">
        <div className="col-md-6">
          <Form.Group className="row">
            <label className="col-sm-3 col-form-label">Name<span className="text-danger">*</span></label>
            <div className="col-sm-9">
            <Form.Control  type="text" name="name"/>
            </div>
          </Form.Group>
        </div>
        <div className="col-md-6">
          <Form.Group className="row">
            <label className="col-sm-3 col-form-label">Text<span className="text-danger">*</span></label>
            <div className="col-sm-9">
            <Form.Control type="text" name="text"/>
            </div>
          </Form.Group>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Form.Group className="row">
            <label className="col-sm-3 col-form-label">GDPR</label>
            <div className="col-sm-9" name="gdpr">
              <select className="form-control">
                <option>Público</option>
                <option>Privado</option>
                <option>Confidencial</option>
                <option>Corporativo</option>
              </select>
            </div>
          </Form.Group>
        </div>
        <div className="col-md-6">
          <Form.Group className="row">
            <label className="col-sm-3 col-form-label">Mask</label>
            <div className="col-sm-9">
            <Form.Control type="text" name="mask"/>
            </div>
          </Form.Group>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Form.Group className="row">
            <label className="col-sm-3 col-form-label">Required<span className="text-danger">*</span></label>
            <div className="col-sm-9">
              <input type="checkbox" name="required" className="form-check-input" defaultChecked/>
              <i className="input-helper"></i>
            </div>
            </Form.Group>
        </div>
        <div className="col-md-6">
          <Form.Group className="row">
            <label className="col-sm-3 col-form-label">Membership</label>
            <div className="col-sm-9">
              {this.getBusinessList()}
            </div>
          </Form.Group>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-6">
          <Form.Group className="row">
            <label className="col-sm-3 col-form-label">Globalization<span className="text-danger">*</span></label>
            <div className="col-sm-9">
              <select className="form-control" name="globalization">
                <option>es-CO</option>
                <option>En-US</option>
              </select>
            </div>
          </Form.Group>
        </div>
        <div className="col-md-6">
        
        </div>
      </div>
      
      <p className="card-description"> </p>

      <div className="row">
        <div className="col-md-6">
          <Form.Group className="row">
            <label className="col-sm-3 col-form-label">Data Type<span className="text-danger">*</span></label>
            <div className="col-sm-9">
              <select className="form-control" name="datatype" onChange={this.selectCategory.bind(this)}>
                <option value="primitive">Primitiva</option>
                <option value="table">Tabla</option>
                <option value="object">Object</option>
              </select>
            </div>
          </Form.Group>
        </div>
        <div className="col-md-6">
          <Form.Group className="row">
            <label className="col-sm-3 col-form-label">Option<span className="text-danger">*</span></label>
            <div className="col-sm-9">
              {this.getSelectList()}
            </div>
          </Form.Group>
        </div>
      </div>
    </form>
    )
  }

  getVariableForm() {
    return (
      <div id="dialog-form" className={this.state.show ? 'auth' : 'auth hide'}>
        <div className="auth-form-light text-left p-3">
          <div className="brand-logo">
            <img src={require("../../assets/images/logo.svg")} alt="logo" />
          </div>
          <form className="pt-3" ref="varForm">
            <Form.Group className="row mb-0">
              <label htmlFor="name" className="col-sm-4 col-form-label">Nombre<span className="text-danger">*</span></label>
              <div className="col-sm-8">
              <Form.Control type="text" className="form-control-sm" id="name" name="name" placeholder="Nombre" />
              </div>
            </Form.Group>
            
            <Form.Group className="row mb-0">
              <label htmlFor="business" className="col-sm-4 col-form-label">Negocio<span className="text-danger">*</span></label>
              <div className="col-sm-8">
                  {this.getBusinessList()}
              </div>
            </Form.Group>
            
            <Form.Group className="row mb-0">
              <label htmlFor="group" className="col-sm-4 col-form-label">Grupo</label>
              <div className="col-sm-8">
                <Form.Control type="text" className="form-control-sm" id="group" name="group" placeholder="Grupo" />
              </div>
            </Form.Group>
            <Form.Group className="row mb-0">
              <label htmlFor="value" className="col-sm-4 col-form-label">Valor</label>
              <div className="col-sm-8">
                <Form.Control type="text" className="form-control-sm" id="value" name="value" placeholder="Valor" />
              </div>
            </Form.Group>
            <Form.Group className="row mb-0">
              <label className="col-sm-4 col-form-label">Tipo de datos<span className="text-danger">*</span></label>
              <div className="col-sm-4">
                <select className="form-control form-control-sm" name="category" onChange={this.selectCategory.bind(this)}>
                  <option value="primitive">Primitiva</option>
                  <option value="table">Tabla</option>
                  <option value="object">Object</option>
                </select>
              </div>
              <div className="col-sm-4">
                {this.getSelectList()}
              </div>
            </Form.Group>

            <Form.Group className="row mb-0">
              <label htmlFor="description" className="col-sm-4 col-form-label">Descripción</label>
              <div className="col-sm-8">
                <textarea className="form-control" id="description" name="Description" rows="4"></textarea>
              </div>
            </Form.Group>

            <Form.Group className="row mb-0 mt-3">
              <div className="col-sm-4"><button className="btn btn-secondary" onClick={(e)=>this.storeVariable(e,'delete')}>Delete</button></div>
              <div className="col-sm-4"><button className="btn btn-secondary" onClick={(e)=>this.storeVariable(e,'cancel')}>Cancel</button></div>
              <div className="col-sm-4"><button className="btn btn-primary" onClick={(e)=>this.storeVariable(e,'ok')}>Ok</button></div>
            </Form.Group>

          </form>
        </div> 
      </div> 
    )
  }

  getTaskForm() {
    return (
      <div id="dialog-form" className={this.state.show ? 'auth' : 'auth hide'}>
        <div className="auth-form-light text-left p-3">
        <form className="pt-3" ref="taskForm">
          <Tabs defaultActiveKey="task">
            <Tab eventKey="task" title="Tarea">

              <Form.Group className="row mb-0 mt-3">
                <label htmlFor="name" className="col-sm-4 col-form-label mb-0">Nombre Tarea</label>
                <div className="col-sm-8">
                  <Form.Control type="text" className="form-control-sm" id="name" name="taskName" placeholder="Nombre Tarea" />
                </div>
              </Form.Group>
              
              <Form.Group className="row mb-0">
                <label htmlFor="evaluar" className="col-sm-4 col-form-label">Evaluar</label>
                <div className="col-sm-7">
                  <Form.Control type="text" className="form-control-sm" id="evaluar" name="evaluar" placeholder="Evaluar" />
                </div>
                <div className="col-sm-1 pl-0 pt-2"><i className="mdi mdi-function-variant"></i></div>
              </Form.Group>
              
              <Form.Group className="row mb-0">
                <label htmlFor="expression" className="col-sm-4 col-form-label">Expression</label>
                <div className="col-sm-7">
                  <Form.Control type="text" className="form-control-sm" id="expression" name="expression" placeholder="Expression" />
                </div>
                <div className="col-sm-1 pl-0 pt-2"><i className="mdi mdi-function-variant"></i></div>
              </Form.Group>
              
              <Form.Group className="row mb-0">
                <label htmlFor="multiLine" className="col-sm-4 col-form-label">Multi Line</label>
                <div className="col-sm-1 pt-2">
                  <input type="checkbox" name="multiLine" className="form-check-input"/>
                  <i className="input-helper form-control-sm"></i>
                </div>
                <div className="col-sm-1 pt-2"><i className="mdi mdi-function-variant"></i></div>
              </Form.Group>
              
              <Form.Group className="row mb-0">
                <label htmlFor="ignoreCase" className="col-sm-4 col-form-label">Ignore case</label>
                <div className="col-sm-1 pt-2">
                  <input type="checkbox" name="ignoreCase" className="form-check-input"/>
                  <i className="input-helper form-control-sm"></i>
                </div>
                <div className="col-sm-1 pt-2"><i className="mdi mdi-function-variant"/></div>
              </Form.Group>
              
            </Tab>
            <Tab eventKey="configuration" title="Configuration">
            
              <Form.Group className="row mb-0 mt-3">
                <label htmlFor="encontrado" className="col-sm-4 col-form-label">Encontrado</label>
                <div className="col-sm-8">
                  {this.getBusinessList()}
                </div>
              </Form.Group>

              <Form.Group className="row mb-0">
                <label htmlFor="coincidencias" className="col-sm-4 col-form-label">Coincidencias</label>
                <div className="col-sm-8">
                  {this.getBusinessList()}
                </div>
              </Form.Group>

              <Form.Group className="row mb-0">
                <label htmlFor="opciones" className="col-sm-4 col-form-label">Opciones</label>
                <div className="col-sm-8">
                  {this.getBusinessList()}
                </div>
              </Form.Group>
              
            </Tab>
          </Tabs>
          
          <Form.Group className="row mb-0 mt-3">
            <div className="col-sm-4"><button className="btn btn-secondary" onClick={(e)=>this.storeTasks(e,'delete')}>Delete</button></div>
            <div className="col-sm-4"><button className="btn btn-secondary" onClick={(e)=>this.storeTasks(e,'cancel')}>Cancel</button></div>
            <div className="col-sm-4"><button className="btn btn-primary" onClick={(e)=>this.storeTasks(e,'ok')}>Ok</button></div>
          </Form.Group>

        </form>
        </div>
      </div>
    )
  }

  getDialogBody(){
    switch(this.state.itemName) {
      case 'variable':
        return this.getVariableForm();      case 'parameter':
        return this.getVariableForm();
      case 'modals':
        return this.getModalBodyForModels();
      case 'tasks':
        return this.getTaskForm();
      default:
        return '';
    }
  }

  render () {
    
    return (
      <div>
        {this.getDialogBody()}
      </div>
    );
  }
}
// export default connect()(Dialogue);
export default Dialogue;