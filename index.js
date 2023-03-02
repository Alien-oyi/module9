const inquirer = require("inquirer")
const fs = require ("fs")
const MarkDown= require('./library/Markdown.js');


const questions = [
    {
        type:"input",
        name:'title',
        message:"what's your project title?"
    },
    {
        type:"input",
        name:'description',
        message:"descrip your app main function: "
    },
    {
        type:"input",
        name:'deployedLink',
        message:"what's your project deployed link?"
    },
    {
        type:"input",
        name:'installation',
        message:"any installation instructions?"
    },
    {
        type:"input",
        name:'screenshot',
        message:"do you have any screenshot link of your project?"
    },
    {
        type:"input",
        name:'usage',
        message:"how much usage does it take?"
    },
    {
        type:"input",
        name:'tests',
        message:"any tests instructions?"
    },
    {
        type:"input",
        name:'email',
        message:"what's your email?"
    },
    {
        type:"input",
        name:'contribution',
        message:"any others contributing?"
    },
    {
        type:"input",
        name:'GitHub',
        message:"what's your GitHub repo?"
    },
    {
        type:"list",
        name:'lisence',
        message:"What license?",
        choices:['MIT','Apache','BSD','GNU'],
        filter(val) {
            return val.toUpperCase();
        }
    }
    
]
function generateReadme() {
    return inquirer.prompt(questions)
    .then((answers)=>{
        const mark = MarkDown.placeAnswers(answers)
        fs.writeFile("README.md",mark,function(err) {
            if(err) {
                console.log(err,"Error");
            } else {
                console.log("Success!");
            }

        }
        )
        
    })
    .catch((error)=>{
        console.log(error,"Error");
    })

}
generateReadme()