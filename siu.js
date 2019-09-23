const argv = require('yargs')
const fs = require ('fs')

argv
  .usage('Usage: $0 <command> [options]')
  .command('login', 'Authenticate user', (yargs) => {
        // login command options
        return yargs.option('username')
                    .option('password')
      },
      ({username, password}) => {
        // super secure login, don't try this at home
        if (username === 'admin' && password === 'password') {
          console.log('Successfully loggedin')
          fs.writeFileSync('~/.credentials', JSON.stringify({isLoggedIn: true, token:'very-very-very-secret'}))
        } else {
          console.log('Please provide a valid username and password')
        }
      }
   )
  .command('secret', 'Authenticate user', (yargs) => {
    return yargs.option('token')
  },
    ({token}) => {
      if( !token ) {
          const data = JSON.parse(fs.readFile('~/.credentials'))
          token = data.token
      }
      if (token === 'very-very-very-secret') {
        console.log('the secret word is `Eierschalensollbruchstellenverursacher`') // <-- that's a real german word btw.
      }
    }
  )
  .command('change-secret', 'Authenticate user', (yargs) => {
    return yargs.option('token')
  },
    ({token, secret}) => {
      if( !token ) {
          const data = JSON.parse(fs.readFile('~/.credentials'))
          token = data.token
      }
      if (token === 'very-very-very-secret') {
        console.log(`the new secret word is ${secret}`)
      }
    }
  )
  .argv;