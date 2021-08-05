# springboot-starter

## 技术选型
`原则：更新、更简洁`
- Java 11
- JPA
- Lombok
- Gradle

## 更改MySQL数据源

在 `application.properties`中配置数据库连接

## test

- 添加数据
```
curl localhost:8080/demo/add -d name=First -d email=someemail@someemailprovider.com
```
- 请求数据
```
curl 'localhost:8080/demo/all'
```