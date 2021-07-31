import React, { Component } from 'react';
import Feed from './components/Feed';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: 1, username: 'Carlos', curtidas: 20, comentarios: 2 },
        { id: 2, username: 'Bruna', curtidas: 5000, comentarios: 0 },
        { id: 3, username: 'User 3', curtidas: 1, comentarios: 1 },
      ]
    };
  }

  render() {
    return (
      <div>
        {
          this.state.feed.map((item) => {
            return (
              <Feed
                id={item.id}
                username={item.username}
                curtidas={item.curtidas}
                comentarios={item.comentarios}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;