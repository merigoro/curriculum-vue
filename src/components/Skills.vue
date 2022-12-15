<template>
    <div class="skills">
        <div class="row">
            <h1>SKILLS</h1>
        </div>
        <div class="row">
            <h1>{</h1>
        </div>
        <div class="row ms-4">
            <h2>{{$t("skills.section1")}}</h2>
        </div>
        <div class="row ms-5">
            <div class="col">
                <span class="badge badge-indigo">C#</span>
                <span class="badge badge-purple">ASP.NET</span>
                <span class="badge badge-yellow-orange">SQL</span>
                <span class="badge badge-aqua">CSS</span>
                <span class="badge badge-orange">HTML</span>
                <span class="badge badge-blue-green">REST API</span>
                <span class="badge badge-red">GIT</span>
                <span class="badge badge-blue">C++</span>    
                <span class="badge badge-yellow">Javascript</span>
                <span class="badge badge-green">Vue.js</span>         

            </div>
        </div>
        <div class="row ms-4">
            <h2>{{$t("skills.section2")}}</h2>
        </div>
        <div class="row ms-5">
            <div class="col">
                <span class="badge badge-blue">Windows</span>
                <span class="badge badge-orange">Linux Debian</span>
                <span class="badge badge-red">Rasberry OS</span>               
            </div>
        </div>
        <div class="row ms-4">
            <h2>{{$t("skills.section3")}}</h2>
        </div>
        <div class="row ms-5">
            <div class="col">
                <span class="badge badge-yellow-orange">SQL Server</span>
                <span class="badge badge-yellow-green">DB2 AS400</span>             
            </div>
        </div>   
        <div class="row">
            <h1>}</h1>
        </div>         
    </div>
</template>

<style scoped>
.skills h1{
    font-weight:900;
}
.skills h2{
    font-weight: bold;
}
.badge{
    color: white;
    padding: 8px;
    border-radius: 40px;
    font-size: 28px;
    font-weight: bold;
    margin:5px;
}
.badge-orange{
    background-color: var(--orange);
}
.badge-red{
    background-color: var(--red);
}
.badge-yellow-orange{
    background-color: var(--yellow-orange);
}
.badge-indigo{
    background-color: var(--indigo);
}
.badge-purple{
    background-color: var(--purple);
}
.badge-blue{
    background-color: var(--blue);
}
.badge-blue-green{
    background-color: var(--blue-green);
}
.badge-aqua{
    background-color: var(--aqua-blue);
}
.badge-yellow{
    background-color: var(--yellow);
}
.badge-yellow-green{
    background-color: var(--yellow-green);
}
.badge-magenta{
    background-color: var(--magenta);
}
.badge-green{
    background-color: var(--green);
}
</style>