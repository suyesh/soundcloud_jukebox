SC.initialize({   client_id: 'fd4e76fc67798bfa742089ed619084a6' });

SC.stream('/tracks/293').then(function(player){
  console.log(player)
});

