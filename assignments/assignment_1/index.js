function getNameFromCommandLine() {
    process.argv=[...process.argv,"Yash"]
    return process.argv[2];
    // Write you code here, name should be taken as args in process.argv
}

function getNameFromEnv() {
    process.env.name="Yash";
    return process.env.name;
    // Write your code here
}

function getNameFromReadLine() {
    // Write your code here
}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}