workflow "Build and publish" {
  on = "push"
  resolves = ["Deploy to GitHub Pages"]
}

action "Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "install"
}

action "Test" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install"]
  runs = "run test"
}

action "Build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Test"]
  runs = "run build --prod"
}

action "Deploy to GitHub Pages" {
  uses = "maxheld83/ghpages@v0.2.1"
  env = {
    BUILD_DIR = "dist/f10k"
  }
  secrets = ["GH_PAT"]
  needs = ["Build"]
}
