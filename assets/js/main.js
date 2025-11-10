
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());
  // Simple search demo
  var search = document.getElementById('siteSearch');
  search && search.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Recherche simulée: ' + (this.querySelector('input').value || '(vide)'));
  });
});
