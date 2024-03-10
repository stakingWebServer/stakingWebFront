pipeline {
    agent any

    environment {
        CURRENT_LOCATION = '/var/lib/jenkins/workspace/stakingweb';
    }
    stages {
        stage('database build') {
            steps {
                    script{
                        def pid
                        def response
                        def status = true
                        try {
                        pid = sh(script: "sudo lsof -t -i :3001 -s TCP:LISTEN",returnStdout: true).trim()
                        }
                        catch(Exception e){
                            echo "오류 내용 : ${e.message}"
                            pid = null
                        }
                       if(pid != "" && pid != null){
                        echo '현재 PID : ${pid}'
                        sh "sudo kill -9 ${pid}"
                        }
                        else{
                            echo "not exist port"
                        }
            sh 'sudo git clone https://github.com/stakingWebServer/stakingWebFront.git'
            sh 'sudo npm install'
            sh 'sudo npm run build'
            sh 'sudo npm run start'
            }
        }
}
}

