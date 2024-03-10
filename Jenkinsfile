pipeline {
    agent any
    environment {
        CURRENT_LOCATION = '/var/lib/jenkins/workspace/web';
    }
        stages {
        stage('build') {
            steps {
            dir(env.CURRENT_LOCATION) {
            sudo rm -rf web
            }
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
            echo '현재 경로!!! : ${env.CURRENT_LOCATION}'
            sh 'sudo npm install'
            sh 'sudo npm run build'
            sh 'sudo nohup npm run start &'
            }
        }
        }
        }
}