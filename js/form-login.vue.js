const form_login = {
    template: `
    <div class="card text-white bg-secondary">
              <div class="card-body">
                <h4 class="card-title text-center">Form Login {{message}}</h4>
                <div class="container">
                    <form @submit.prevent="login">
                        <div class="form-group row">
                            <label for="inputName" class="col-sm-4 col-form-label">Username</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control" v-model="username">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputName" class="col-sm-4 col-form-label">Password</label>
                            <div class="col-sm-8">
                                <input type="password" class="form-control" v-model="password">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="offset-sm-4 col-sm-8">
                                <button type="submit" class="btn btn-primary">Login</button>
                                <button type="submit" class="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </form>
                </div>
              </div>
            </div>`,
    props: ['title'],
    data() {
        return {
          message: "OK",
          username: "",
          password: "",
        };
    },
    methods: {
        login() {
            console.log(this.username+' '+this.password);
        },
    }

};