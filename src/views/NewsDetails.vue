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
                            <a class="nav-link active" aria-current="page" href="#" @click="loginPage()" v-if="!tokenStatus">Login</a>
                            <a class="nav-link active" aria-current="page" href="#" @click="logout()" v-if="tokenStatus">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <div>
        <main>
            <!-- About US Start -->
            <div class="about-area">
                <div class="container">
                    <!-- Hot Aimated News Tittle-->
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="trending-tittle">
                                
                                <!-- <p>Rem ipsum dolor sit amet, consectetur adipisicing elit.</p> -->
                                <div class="trending-animated">
                                    <ul id="js-news" class="js-hidden">
                                        <li class="news-item">Bangladesh dolor sit amet, consectetur adipisicing elit.</li>
                                        <li class="news-item">Spondon IT sit amet, consectetur.......</li>
                                        <li class="news-item">Rem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                                    </ul>
                                </div>
        
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8">
                            <!-- Trending Tittle -->
                            <div class="about-right mb-90">
                                <div class="about-img">
                                    <img :src="posts.image" class="rounded shadow" >
                                </div>
                                <div class="section-tittle mb-30 pt-30">
                                    <h3>{{ posts.title }}</h3>
                                </div>
                                <div class="about-prea">
                                    <p class="about-pera1 mb-25">{{ posts.description }}</p>
                                </div>
                                <div class="section-tittle">
                                    <h3></h3>
                                </div>
                                <div class="about-prea">
                                    <p class="about-pera1 mb-25"></p>
                                </div>
                                <div class="social-share pt-30">
                                    <div class="section-tittle">
                                        <h3 class="mr-20"><i class="fa-solid fa-eye me-2"></i>{{ viewCount }}</h3>
                                    </div>
                                </div>
                            </div>
                            <!-- From -->
                            <div class="row">
                                <div class="col-lg-8">                                         
                                    <div class="form-group mb-5" @click="back()">
                                        <button type="submit" class="btn btn-dark px-4 fs-5">Back</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <!-- Section Tittle -->
                            <div class="section-tittle mb-40">
                                <h3>Follow Us</h3>
                            </div>
                            <!-- Flow Socail -->
                            <div class="single-follow mb-45">
                                <div class="single-box">
                                    <div class="follow-us d-flex align-items-center">
                                        <div class="follow-social">
                                            <a href="#"><img src="assets/img/news/icon-fb.png" alt=""></a>
                                        </div>
                                        <div class="follow-count">
                                            <span>8,045</span>
                                            <p>Fans</p>
                                        </div>
                                    </div>
                                    <div class="follow-us d-flex align-items-center">
                                        <div class="follow-social">
                                            <a href="#"><img src="assets/img/news/icon-tw.png" alt=""></a>
                                        </div>
                                        <div class="follow-count">
                                            <span>8,045</span>
                                            <p>Fans</p>
                                        </div>
                                    </div>
                                    <div class="follow-us d-flex align-items-center">
                                        <div class="follow-social">
                                            <a href="#"><img src="assets/img/news/icon-ins.png" alt=""></a>
                                        </div>
                                        <div class="follow-count">
                                            <span>8,045</span>
                                            <p>Fans</p>
                                        </div>
                                    </div>
                                    <div class="follow-us d-flex align-items-center">
                                        <div class="follow-social">
                                            <a href="#"><img src="assets/img/news/icon-yo.png" alt=""></a>
                                        </div>
                                        <div class="follow-count">
                                            <span>8,045</span>
                                            <p>Fans</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- New Poster -->
                            <div class="news-poster d-none d-lg-block">
                                <img src="assets/img/news/news_card.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- About US End -->
        </main>
    </div>
</template>

<script src="../js/newDetails.js"></script>
