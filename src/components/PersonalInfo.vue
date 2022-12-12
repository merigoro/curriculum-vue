<template>
    <div class="col-4 user-info" style="background-color:#121821">
        <div class="row">
            <div class="col text-center">
                <h1>Roberto</h1>
                <h1>Merigo</h1>
                <h4>30/07/1999</h4>                       
            </div>
        </div>
        <hr>
        <div class="contatti">
            <div class="row">
                <h2>.{{ $t("contactsTitle") }}()</h2>
            </div>
            <div class="row">
                <h2>{</h2>
            </div>
            <div class="row ms-4">
                <div class="col-1">
                    <font-awesome-icon icon="fa-solid fa-phone" />
                </div>
                <div class="col-8">
                    <h4>3342637663</h4>
                </div>
            </div>
            <div class="row ms-4">
                <div class="col-1">
                    <font-awesome-icon icon="fa-solid fa-envelope" />
                </div>
                <div class="col-8">
                    <h4 style="letter-spacing:1px;">merigo.roberto33@gmail.com</h4>
                </div>
            </div>
            <div class="row ms-4">
                <div class="col-1">
                    <font-awesome-icon icon="fa-brands fa-linkedin"/>
                </div>
                <div class="col-8">
                    <h4>www.linkedin.com/in/roberto-merigo</h4>
                </div>
            </div>
            <div class="row ms-4">
                <div class="col-1">
                    <font-awesome-icon icon="fa-solid fa-location-dot" />
                </div>
                <div class="col-8">
                    <h4>Ghedi (BS)</h4>
                </div>
            </div>
            <div class="row">
                <h2>}</h2>
            </div>
        </div>
        <hr>
        <div class="lingue">
            <div class="row">
                <h2>.Lingue()</h2>
            </div>
            <div class="row">
                <h2>{</h2>
            </div>
            <div class="row ms-4">
                <div class="col-4">
                    <h4>Italiano</h4>
                </div>
                <div class="col">
                    <div class="progress">
                        <div class="progress-bar italy" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div class="row ms-4">
                <div class="col-4">
                    <h4>Inglese</h4>
                </div>
                <div class="col">
                    <div class="progress">
                        <div class="progress-bar english" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <h2>}</h2>
            </div>
        </div>
        <hr>
        <div class="istruzione">
            <div class="row">
                <h2>.Istruzione()</h2>
            </div>
            <div class="row">
                <h2>{</h2>
            </div>
            <div class="row ms-4">
                <h5>09/2012 – 06/2018</h5>
            </div>
            <div class="row ms-4">
                <h3 style="font-weight: bold;">Diploma in Informatica e Telecomunicazioni</h3>
            </div>
            <div class="row ms-4">
                <h4>Blaise Pascal Manerbio</h4>
            </div>
            <div class="row">
                <h2>}</h2>
            </div>
        </div>
        <hr>
        <div class="patente">
            <div class="row">
                <h2>.Patente_di_guida()</h2>
            </div>
            <div class="row">
                <h2>{</h2>
            </div>
            <div class="row ms-4">
                <ul style="margin-left:40px; list-style-type:square">
                    <li>B  <img src="../assets/images/car.png" style="width:2em"/></li>
                </ul>
            </div>
            <div class="row">
                <h2>}</h2>
            </div>
        </div>
        <hr>
        <div class="dati-personali">
            <div class="row">
                <h2>.Trattramento_dei_dati</h2>
            </div>
            <div class="row">
                <h2>{</h2>
            </div>
            <div class="row ms-4">
                <i>Autorizzo il trattamento dei dati personali contenuti nel mio
                    curriculum vitae in base all’art. 13 del D. Lgs. 196/2003 e all’art. 13 del
                    Regolamento UE 2016/679 relativo alla protezione delle persone
                    fisiche con riguardo al trattamento dei dati personali</i>
            </div>
            <div class="row">
                <h2>}</h2>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .user-info h1{
        font-weight: bold;
    }
    .user-info h2{
        font-size: 2rem;
        font-weight: bold;
        color:var(--yellow-green)
    }
    .user-info h4{
        font-size: 1.6rem;;
    }
    .contatti h4{
    font-weight: bold;
    font-size:1.4rem;
    }
    .progress{
        border-radius: 2em;
        background-color: var(--light-grey);
    }
    .progress-bar{
        border-radius: 2em;
    }
    .lingue h4{
        font-weight: bold;
    }
    .italy{
        background-color: var(--red);
    }
    .english{
        background-color: var(--blue);
    }
    .patente li{
        font-weight: bold;
    }
    .dati-personali i{
    font-size:1.2rem;
    }
</style>
