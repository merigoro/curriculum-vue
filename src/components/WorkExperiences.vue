
<template>
    <div class="esperienza">
        <div class="row">
            <div class="col">
                <h1>{{ $t("workExperiences.title") }}</h1>
            </div>
        </div>
        <div class="row">
            <div class="card-work green-blue">
                <div class="card-work-header green-blue">
                    <h2>{{ $t("workExperiences.workExperience1.title")}}</h2>
                    <h3>{{ $t("workExperiences.workExperience1.company")}}</h3>
                    <h4>{{ $t("workExperiences.workExperience1.date")}}</h4>
                </div>
                <div class="card-work-body">
                    <ul class="a">
                        <li>{{ $t("workExperiences.workExperience1.jobDuties1")}}</li>
                        <li>{{ $t("workExperiences.workExperience1.jobDuties2")}}</li>
                        <li>{{ $t("workExperiences.workExperience1.jobDuties3")}}</li>
                        <li>{{ $t("workExperiences.workExperience1.jobDuties4")}}</li>
                        <li>{{ $t("workExperiences.workExperience1.jobDuties5")}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="card-work orange">
                <div class="card-work-header orange">
                    <h2>{{ $t("workExperiences.workExperience2.title")}}</h2>
                    <h3>{{ $t("workExperiences.workExperience2.company")}}</h3>
                    <h4>{{ $t("workExperiences.workExperience2.date")}}</h4>
                </div>
                <div class="card-work-body">
                    <ul class="a">
                        <li>{{ $t("workExperiences.workExperience2.jobDuties1")}}</li>
                        <li>{{ $t("workExperiences.workExperience2.jobDuties2")}}</li>
                        <li>{{ $t("workExperiences.workExperience2.jobDuties3")}}</li>
                        </ul>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="card-work indigo">
                <div class="card-work-header indigo">
                    <h2>{{ $t("workExperiences.workExperience3.title")}}</h2>
                    <h3>{{ $t("workExperiences.workExperience3.company")}}</h3>
                    <h4>{{ $t("workExperiences.workExperience3.date")}}</h4>
                </div>
                <div class="card-work-body">
                    <ul class="a">
                        <li>{{ $t("workExperiences.workExperience3.jobDuties1")}}</li>
                        </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.experience h1{
    font-weight: 900;
}
.card-work{
    background-color: #fff;
    color: #1f2937;
    border-radius: 20px;
    padding:0;
    margin: 15px;
}
.card-work-header{
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    padding:20px;
}
.card-work-header h2{
    color: #fff;
    font-weight: bold;;
}
.card-work-header h3 {
    color: #fff;
}
.card-work-header h4 {
    color: #fff;
}
.card-work-body{
    background-color: #fff;
    color: #1f2937;
    padding:20px;
    border-radius: 20px;
}
.card-work.green-blue{
    box-shadow: -10px 10px var(--aqua-blue);
}
.card-work-header.green-blue{
    background-color: var(--blue-green);
    color: #1f2937;
}
.card-work.orange{
    box-shadow: -10px 10px #e89f8a;
}
.card-work-header.orange{
    background-color: var(--orange);
    color: #1f2937;
}
.card-work.indigo{
    box-shadow: -10px 10px #a39cec;
}
.card-work-header.indigo{
    background-color: var(--indigo);
    color: #1f2937;
}
</style>