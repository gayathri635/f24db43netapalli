exports.api = function(req, res) {
    res.write('[');
    res.write('{"resource":"chocolates", ');
    res.write('"verbs":["GET", "PUT", "DELETE"]}');
    res.write(']');
    res.send();
  };
  