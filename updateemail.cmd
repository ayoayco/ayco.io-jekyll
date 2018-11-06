git filter-branch --commit-filter '
        if [ "$GIT_AUTHOR_EMAIL" = "mail@ayoayco.com" ];
        then
                GIT_AUTHOR_EMAIL="ramon.aycojr@gmail.com";
                git commit-tree "$@";
        else
                git commit-tree "$@";
        fi' HEAD
