
const keys = require('../../config/keys')

module.exports = (survey) => {
  return 
     `<html><body>
     <div style="text-align: center;" >
      <h3>I'd like your input!</h3>
      <p>Please answer the following questions:</p>
      <p>${survey.body}</p>
     <div>
     <a href="${keys.redirectdomain}">No</a>
     </div>
     <div>
     <a href="${keys.redirectdomain}">Yes</a>
     </div>
      </div>
     </body>
     </html>`
  
  ;
};
