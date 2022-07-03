var getUserRepos = function() {
    fetch("https://api.github.com/users/octcat/repos");
};

getUserRepos();