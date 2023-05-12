const mysql= require('mysql2');
const inquirer= require('inquirer');
const table= require('console.table');

const connection= mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'company_db',
});

connection.connect(err => {
    if (err) throw err;
    console.log("Welcome to Wal-Mart");
    startMenu()
});

const startMenu= () => {
    inquirer.createPromptModule({
        message: 'Welcome! what would you like to do?',
        name: 'menu',
        type: 'list',
        choices: [
            'View Departments',
            'View Jobs',
            'View all associates',
            'add a department',
            'add a job',
            'add an associate',
            'Update associate job',
            'EXIT',
        ],
    })
    .then(response => {
        switch (response.menu){
            case 'View Departments':
                viewDepartment();
                break;
            case 'View Jobs':
                viewJobs();
                break;
            case 'View all associates':
                viewAssociates();
                break;
            case 'add a department':
                addDepartment();
                break;
            case 'add a job':
                addJob();
                break;
            case 'add an associate':
                addAssociate();
                break;
            case 'Update associate job':
                updateAssociate();
                break;
            case 'EXIT':
                connection.end();
                break;
            default:
                connection.end();
        }
    });
};

const viewDepartment= () => {
    connection.query('SELECT * FROM department', function (err, res){
        if(err) throw err;
        console.table(res);
        startMenu();
    })
}