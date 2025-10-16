import Fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import path from 'path' // nesse contexto é usado para retirar o caminho do diretório do caminho do arquivo
import { fileURLToPath } from 'url' // metodo que converte o caminho de um arquivo em URL para path

const server = Fastify()


const __filename = fileURLToPath(import.meta.url) // import.meta.url pega o caminho do arquivo atual em URL, fileURLToPath converte esse caminho URL para path
const __dirname = path.dirname(__filename) // path.dirname exclui o nome do arquivo na variavel __filename e deixa só o caminho para o diretório onde ela se encontra

const caminho_public = path.join(__dirname, 'public') // pega o nome da pasta que contém arquivos estáticos(no caso 'public') e a adiciona no caminho do diretório

server.register(fastifyStatic, {        
    root: caminho_public
})

server.get('/', (request, reply) => {

    reply.sendFile('index.html', { root: caminho_public})
})



server.listen({
    port: parseInt(process.env.PORT) || 7777,
    host: '0.0.0.0'
})
