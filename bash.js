const pwdExporter = require("./pwd");
pwdExporter();
const lsExporter = require("./ls");
console.log(lsExporter);
const catExporter = require("./cat");
console.log(catExporter);

const curlExporter = require("./curl");

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

  process.stdout.write("You typed: " + cmd);
  process.stdout.write("\nprompt > ");
});
