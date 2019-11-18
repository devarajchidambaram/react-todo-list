import React from 'react'

class Todo extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            items : [
                {
                    id: Date.now(),
                    text: 'pay eb bill'
                },
                {
                    id: Date.now(),
                    text: 'buy cellphone'
                }
            ],
            text : ''
        }
    }

    render(){
        return (
            <div>
                <h3>Todo list</h3>         
                <TodoList  items={this.state.items} />

                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        value={this.state.text}
                        placeholder= 'Add some task...'
                    />
                    <button >
                         Add #{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        )
    }

    handleChange = e =>{
        this.setState({
            text : e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        if(!this.state.text.length) {
            return;
        }

        const todo ={
            id: Date.now(),
            text: this.state.text
        }

    this.setState(prev => ({
        text : '',
        items :  [...prev.items, todo]
    }))
    }
}

class TodoList extends React.Component {
    render(){
        return (
            <ul>
                {
                    this.props.items.map( item =>{
                      return (
                      <li key={item.id}> {item.text}</li>
                      )
                    })
                }
            </ul>
        )
    }
}

 export default Todo;