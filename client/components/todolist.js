Vue.component('todolist', {
    // camelCase in JavaScript
    props: ['eachtodo','index'],
    template: ` 
    
    <table class="ui celled table">
    <thead>
    <th>{{eachtodo.title}}</th>
    </thead> 
    <tbody>
      <tr>
        <td>
          <div class="ui header">
            <input class="ui checkbox" type="checkbox">
            <div class="content">
              {{eachtodo.content}}
              <button @click="$emit('deletetodo',eachtodo._id,index)" class="ui button">Delete</button> 
              </div>
              <div class="sub header">{{eachtodo.createdAt}}
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  
`,
  })

  

