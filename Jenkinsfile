pipeline {
    agent any
        stages {
        stage('build') {
            steps {
                    script{
                        def pid
                        def response
                        def status = true
                        pid = sh(script: "sudo lsof -t -i :3001 -s TCP:LISTEN",returnStdout: true).trim()
                        echo 'test   : : ${pid}'
                       if(pid != "" && pid != null){
                        echo '현재 PID : ${pid}'
                        sh "sudo kill -9 ${pid}"
                        }
                        else{
                            echo "not exist port"
                        }
                    sudo git clone https://github.com/stakingWebServer/stakingWebFront.git
                    sourceDir = "/var/lib/jenkins/workspace/web/stakingWebFront"
                    targetDir = "/app/project"

                    sh "mv ${sourceDir}/* ${targetDir}/"

            sh 'sudo npm install'
            sh 'sudo npm run build'
            sh 'sudo nohup npm run start &'
            }
        }
        }
        }
        }