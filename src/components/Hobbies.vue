<template>
    <div class="hobbies">
        <div class="row">
            <h1>HOBBIES</h1>
        </div>
        <div class="row justify-content-center">
            <div class="col text-center">
                <img src="../assets/images/kyusho.png" style="width:3em"/>
                <h4>Kyusho</h4>
            </div>
            <div class="col text-center">
                <font-awesome-icon icon="fa-solid fa-basketball" />
                <h4>Basketball</h4>
            </div>
            <div class="col text-center">
                <img src="../assets/images/snowboarder.png" style="width:3em"/>
                <h4>Snowboarding</h4>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .hobbies .fa-solid{
        font-size:3em;
    }
    .hobbies h4{
        margin:20px;
        font-weight: bold;
    }
    .fa-basketball{
        color: var(--orange);
        font-size:3em
    }
    .fa-person-snowboarding{
        color: var(--aqua-blue);
    }
    
</style>