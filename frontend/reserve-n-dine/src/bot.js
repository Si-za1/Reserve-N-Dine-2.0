// import QnAMaker from 'botbuilder-ai';



// class EchoBot extends ActivityHandler {
//     constructor(configuration, qnaOptions) {
//         super();
//         if (!configuration) throw new Error('[QnaMakerBot]: Missing parameter. configuration is required');

//         // now create a QnAMaker connector.
//         this.qnaMaker = new QnAMaker(configuration, qnaOptions);

//         this.onMessage(async (context, next) => {
//             const replyText = `Echo: ${ context.activity.text }`;
//             await context.sendActivity(MessageFactory.text(replyText, replyText));
//             // send user input to QnA Maker.
//             const qnaResults = await this.qnaMaker.getAnswers(context);
        
//             // If an answer was received from QnA Maker, send the answer back to the user.
//             if (qnaResults[0]) {
//                 await context.sendActivity(`QnA Maker Returned: ' ${ qnaResults[0].answer}`);
//             }
//             else {
//                 // If no answers were returned from QnA Maker, reply with help.
//                 await context.sendActivity('No QnA Maker response was returned.'
//                     + 'This example uses a QnA Maker Knowledge Base that focuses on smart light bulbs. '
//                     + `Ask the bot questions like "Why won't it turn on?" or "I need help."`);
//             }
//             await next();
        