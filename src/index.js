const express = require("express");
const app = express();
const { Client, Query } = require("pg");

const client = new Client("postgres://postgres:123@127.0.0.1:5432/rastreador");
client.connect();

app.get("/", (req, res) => {
  var coord_query =
    "select json_agg(row)from ( with b as (select ('SRID=4326;POINT(" +
    req.query.lon +
    " " +
    req.query.lat +
    ")')::geometry as point) select name, (select name from planet_osm_polygon WHERE admin_level = '8' AND st_contains(way, point) limit 1) as municipio, (select name from planet_osm_polygon WHERE admin_level = '4' and way_area > 1 AND st_contains(way, point) limit 1) as estado from planet_osm_line, b WHERE st_dwithin(way, point, 0.001) AND (name IS NOT NULL OR ref IS NOT NULL) AND upper(name) <> upper('rua') AND upper(name) <> upper('avenida') AND upper(name) <> upper('retorno') ORDER BY (st_distance(way, point)), z_order desc limit 1) row;";

  var query = client.query(new Query(coord_query));
  query.on("row", function(row, result) {
    result.addRow(row);
  });

  query.on("end", function(result) {
    res.send(result.rows[0].json_agg);
    res.end();
  });
});

app.listen(3005);
