import React, { Component } from 'react';

import Header from './Components/Header/Header';
import NewTask from './Components/NewTask/NewTask';
import Tasks from './Components/Tasks/Tasks';
import Layout from './Components/Layout/Layout';
import ClearBtn from './Components/ClearBtn/ClearBtn';

class App extends Component {
  state = {
    tasks: []
  };

  addTaskHandler = event => {
    event.preventDefault();
    const newTask = { task: event.target.inpTask.value, isChecked: false };
    event.target.inpTask.value = '';
    const tasks = [...this.state.tasks, newTask];
    this.setState({
      tasks: tasks
    });
  };

  handleDeleteTask = index => {
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    this.setState({
      tasks: tasks
    });
  };

  clearBtnHandler = () => {
    const confirmation = window.confirm(
      'Are you sure you want to delete all tasks?'
    );
    if (confirmation) {
      this.setState({
        tasks: []
      });
    }
  };

  toggleCheckedHandler = index => {
    const tasks = [...this.state.tasks];
    tasks[index].isChecked = !tasks[index].isChecked;
    this.setState({
      tasks: tasks
    });
  };

  render() {
    return (
      <Layout>
        <Header tasks={this.state.tasks} />
        <NewTask submit={this.addTaskHandler} />
        <Tasks
          tasks={this.state.tasks}
          click={this.handleDeleteTask}
          toggleChecked={this.toggleCheckedHandler}
        />
        <ClearBtn clear={this.clearBtnHandler} tasks={this.state.tasks} />
      </Layout>
    );
  }
}

export default App;
