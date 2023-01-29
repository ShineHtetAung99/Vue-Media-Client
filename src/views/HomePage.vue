<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div class="container">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" @click="home()" >Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" @click="loginPage()" v-if="!tokenStatus">Login</a>
                            <a class="nav-link active" aria-current="page" href="#" @click="logout()" v-if="tokenStatus">Logout</a>
                        </li>
                    </ul>
                    <div class="d-flex col-3" >
                        <input type="text" class="form-control" v-model="searchKey" v-on:keyup.enter="search()" placeholder="Search">
                        <a href="" class="text-dark"><i class="mt-2 px-3 fs-5 fas fa-search special-tag" @click="search()"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <!-- Whats New Start -->
    <section class="whats-news-area pt-50 pb-20">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row d-flex justify-content-between">
                        <div class="col-lg-3 col-md-3">
                            <div class="section-tittle mb-30">
                                <h3>Whats New</h3>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-9">
                            <div class="properties__button">
                                <!--Nav Button  -->
                                <nav>
                                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab"
                                            href="#" role="tab" aria-controls="nav-home"
                                            aria-selected="true" @click="categorySearch('')">All</a>
                                        <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab"
                                            href="#" role="tab" aria-controls="nav-profile"
                                            aria-selected="false" @click="categorySearch(category.title)" v-for="(category,index) in categoryLists" :key="index">{{ category.title }}</a>
                                    </div>
                                </nav>
                                <!--End Nav Button  -->
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <!-- Nav Card -->
                            <div class="tab-content mt-4" id="nav-tabContent">
                                <!-- card one -->
                                <div class="tab-pane fade show active" id="nav-home" role="tabpanel"
                                    aria-labelledby="nav-home-tab">
                                    <div class="whats-news-caption">
                                        <div v-if="!tokenStatus">
                                            <h1 class="text-center" >
                                                <div class="alert alert-danger mb-5" role="alert" style="padding-top:200px;padding-bottom:200px">
                                                    You need to login!
                                                </div>
                                            </h1>
                                        </div>
                                        <div class="row" v-else>
                                            <div class="text-center align-items-center" v-if="postLists.length == 0">
                                                <h1 class="text-center">
                                                    <div class="alert alert-danger mb-5" role="alert" style="padding-top:200px;padding-bottom:200px">
                                                        There is no Data!
                                                    </div>
                                                </h1>
                                            </div>
                                            <div class="col-lg-6 col-md-6" v-for="(post,index) in postLists" :key="index" v-else-if="postLists.length !=0">
                                                
                                                    <div class="single-what-news mb-100" @click="newsDetails(post.post_id)">
                                                        <div class="what-img">
                                                            <a href="#"><img v-bind:src="post.image" style="height:350px" /></a>
                                                        </div>
                                                        <div class="what-cap">
                                                            <span class="color1">Code News</span>
                                                            <h4>
                                                                <a href="#">{{ post.title }}</a>
                                                            </h4>
                                                        </div>
                                                    </div>
                                               
                                            </div>
    
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <!-- End Nav Card -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Whats New End -->
    
    <!--Start pagination -->
    <!-- <div class="pagination-area pb-45 text-center">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="single-wrap d-flex justify-content-center">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-start">
                                <li class="page-item">
                                    <a class="page-link" href="details.html"><span class="flaticon-arrow roted"></span></a>
                                </li>
                                <li class="page-item active">
                                    <a class="page-link" href="details.html">01</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="details.html">02</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="details.html">03</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="details.html"><span
                                            class="flaticon-arrow right-arrow"></span></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <!-- End pagination  -->
</template>

<script src="../js/homePage.js"></script>
