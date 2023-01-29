<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div class="container">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" @click="home()">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" @click="loginPage()">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <div class="container my-5 shadow p-5 col-6">
        <div class="alert alert-danger" role="alert" v-if="userStatus">
            The Credential Do Not Match!
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" v-model="userData.email" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" v-model="userData.password" id="exampleInputPassword1">
        </div>
        <button type="button" class="btn btn-primary" @click="login()">Login</button>
    </div>
</template>

<script src="../js/loginPage.js"></script>