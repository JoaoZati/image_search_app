# Image Gallery

## About

This is a app that you input search keys and it appears to you. Than you can save or delete it

# How to run

You can run api server and frontend server independent of each other and configure it or run docker-compose to create all docker containers and run it.

# launch.json for debbuyng
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Python: Remote Attach",
            "type": "python",
            "request": "attach",
            "connect": {
                "host": "localhost",
                "port": 10001
            },
            "pathMappings": [
                {
                    "localRoot": "${workspaceFolder}/api",
                    "remoteRoot": "/app"
                }
            ],
            "justMyCode": true
        }
    ]
}