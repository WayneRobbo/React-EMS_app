class AuthenticationService {
    registerSuccesfulLogin(username,password){
        console.log("succesful login");
        sessionStorage.setItem('authenticatedUser', username);
    }

    logoutSuccessful(username, password){
        console.log("succeful logout");
        sessionStorage.removeItem('authenticatedUser',username);
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) {
            return console.log("user not present");
        }else{
            return console.log("user present");
        }
    }
}
export default new AuthenticationService()