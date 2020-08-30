### Passo a passo - Definição do app
    Instalar express - npm install express
    Alterar package.json, add type: modules para permitir import 
    Criar gerenciador de rotas
        const app = express()
        const router = express.Router()
        router.get|post|delete|put
        arrow functions
            (req, res) => {} 


### Passo a passo MongoDB / Mongoose
# Baixar Mongo Server Community
    a -  Não instalar como serviço
    b -  Criar pasta db/data na raiz da unidade c:
    c -  Testar mongo compass
    d -  Criar database/collection
# Instalar mongoose
    npm install mongoose
    mongoose.connect("mongodb://localhost/novoscaminhos")
    add params
        useNewUrlParser: true,
        useUnifiedTopology: true

# Instance Model/Schema
    todoSchema = mongoose.Schema({...
    mongoose.model('todos', todoSchema);
    const TodoModel = mongoose.model('todos');
# Operações REST
    async/await

    GET
        TodoModel.find({})
    GET/id
        TodoModel.find({id: id})
    POST
        TodoModel.create(todoBody)
    PUT
        TodoModel.updateOne({id: id}, {...bodyTodo})
    DELETE
        TodoModel.deleteOne({id:id});
    DELETE/all
        TodoModel.deleteMany();
    

### Passo a Passo - MongoAtlas
    # 1. Acessar https://www.mongodb.com/cloud/atlas
    # 2. Usar a integração de autenticação com gmail
    # 3. Manter as configurações padrões
    # 4. Seguir o passo a passo do pós instalação, exceto a Load Samples
    # 5. Configurar o endereço obtido na opção connect agora na aplicação


### Passo a Passo - heroku

    # Criar conta no heroku 

    # 1 Instalar Heroku Cli (Reiniciar VSC)

    # 2 Instalar Git

    ## criar arquivo .gitignore(node_modules)
    

    # 3 git Init + git add * + git commit "commit 1"

    # 4 Alterar package.json
        add script: "start": "node app.js"
        add engines: 
            "engines": {
                "node": "14.x"
            }
    # 5 Create arquivo Procfile
        web: node app.js

    # 6 Alterar listen da porta app
        process.env.PORT || 5000

    

    # 7 Instalação de dependênias de para driblar segurança
            Install cors - terminal
            # npm install cors

            # app.js - alteração no código
    import cors from 'cors';
    app.use(cors());

    # 8 Alterar Requests no Insomonia(Limpar históricos)

    # 9 Testar localmente: Rodar no terminal
        npm install
        heroku web local

    # 10 Implantando na nuvem
        heroku create

        git push heroku master



