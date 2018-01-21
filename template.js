module.exports = function(name, company){

  if(name) {
    return `Hi ${name},

I'm a CS student and really interested in interning at ${company}.

Thanks,
Rahul Sonwalkar`
  }
  else {
    return `Hi,

I'm a CS student and really interested in interning at ${company}.

Thanks,
Rahul Sonwalkar`
  }
}
