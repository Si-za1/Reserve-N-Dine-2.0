// import React from 'react';

// import ReactWebChat, { createDirectLine } from 'botframework-webchat';

// export default class extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       directLine: null
//     };
//   }

//   componentDidMount() {
//     this.fetchToken();
//   }

//   async fetchToken() {
//     const res = await fetch('https://webchat.botframework.com/embed/Siza1?s=YOUR_SECRET_HERE', { method: 'POST' });
//     const { token } = await res.json();

//     this.setState(() => ({
//       directLine: createDirectLine({ token })
//     }));
//   }

//   render() {
//     return (
//       this.state.directLine ?
//         <ReactWebChat
//           className="chat"
//           directLine={ this.state.directLine }
//         />
//       :
//         <div>Connecting to bot&hellip;</div>
//     );
//   }
// }




 import React from 'react';
   const mystyle={
       width: "100%",
       height: "100%",
       fontSize:"40px",
       color:"black",
       padding:"30px",
    }
    
 function Chatbot() {
    return (
        <div>
         <iframe title="chatbot"  src="https://webchat.botframework.com/embed/Siza1?s=YOUR_SECRET_HERE" style={mystyle}>
         {/* <iframe title="chatbot" src="api://49a128bf-8866-46a3-af0c-ca1f1302b36d/Filesread" >          */}
        </iframe>
         
       </div>
    )
}
export default Chatbot;
