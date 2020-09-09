import React from 'react';
import {
  Diagram,
  store as diagramStore,
  setEntities,
  setConfig,
  setCustom,
  diagramOn,
} from './react-flow-diagram';

import model from './model-example';
import { config, customEntities } from './config-example';
import { addEntity, addLink } from './react-flow-diagram/lib/entity/reducer';
import calcLinkPoints from './react-flow-diagram/lib/links/calcLinkPoints';

class InteractiveDiagram extends React.PureComponent {

  UNSAFE_componentWillMount() {
    // diagramStore.dispatch(setConfig(config));
    // diagramStore.dispatch(setEntities(model));   
    diagramOn('anyChange', entityState => {
        // You can get the model back
        // after modifying the UI representation
        console.info(entityState)
        /*let l = entityState.length-1;
        if(!entityState[l].custom){
          diagramStore.dispatch(setCustom({
            id : entityState[l].id,
            custom : { 
              onClickTask : this.onClickTask,
              onClickLink: this.onClickLink,
            }
          }));
        }*/
      }
    );
  }

  UNSAFE_componentWillReceiveProps(newProps) {   
    let action =  newProps.updateDiagram;
    if(action.itemName=='tasks'){
      if(action.isNew){
        this.addNote();
      }
    }else if(action.itemName=='connect'){
      if(action.isNew){
        this.addConnection();
      }
    }
  }

  onClickTask(id){
    console.log(id)
  }

  onClickLink(id){
    console.log(id)
  }

  addNote(){
    let state = diagramStore.getState();
    let nodes = state.entity,
      len = nodes.length,
      id = String(len+1);
    diagramStore.dispatch(addEntity({
      id : id,
      type: 'Task',
      width: 150,
      height: 75,
      x: -1000,
      y: -1000,
      name: 'Task ' + id,
    }));
    diagramStore.dispatch(setCustom({
      id : id,
      custom : { 
        onClickTask : this.onClickTask,
        onClickLink: this.onClickLink,
      }
    }));
  }

  addConnection(){
    
    let state = diagramStore.getState();
    let nodes = state.entity,
      len = nodes.length;

    if(len>1){
      let pts = calcLinkPoints(nodes[0], nodes[len-1]);

      let link = {
        target: nodes[len-1].id,
        edited: false,
        points: pts,
      };
      diagramStore.dispatch(addLink({
        id : nodes[0].id,
        link : link
      }));

    }
  }

  render() {
    return <Diagram 
        customEntities={customEntities}
      />;
  }
}

export default InteractiveDiagram;
