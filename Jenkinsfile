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
                    // 이동할 원본 디렉토리와 대상 디렉토리를 정의
                    def sourceDir = "/var/lib/jenkins/workspace/web"
                    def targetDir = "/app/project"

                    // 원본 디렉토리에서 파일 목록을 가져와서 대상 디렉토리로 이동
                    sh "mv ${sourceDir}/* ${targetDir}/"

            sh 'sudo npm install'
            sh 'sudo npm run build'
            sh 'sudo nohup npm run start &'
            }
        }
        }
        }
}