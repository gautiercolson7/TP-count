pipeline {
    agent any
    stages {
        stage('Access') {
			steps {
				git([url:'https://github.com/gautiercolson7/tp-count.git', branch:'master'])
			}
		}
		stage('Build') {
			steps {
				bat 'docker build -t "tp-backend" ./backend'
				bat 'docker build -t "tp-frontend" ./frontend'
			}
		}
		stage('Remove') {
			steps {
				bat 'docker image rm tp-backend'
				bat 'docker image rm tp-frontend'
			}
		}
		stage('Compose') {
			steps {
				bat 'docker-compose up'
			}
		}
    }
}