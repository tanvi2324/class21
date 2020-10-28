function collisionDetection(pqr,abc)
{
  if (pqr.x - abc.x < abc.width/2 +pqr .width/2
    && abc.x - pqr.x <abc.width/2 + pqr.width/2
    && pqr.y - abc.y < abc.height/2 + pqr.height/2
    && abc.y - pqr.y < abc.height/2 + pqr.height/2) {
  return true;
}
else {
 return false;
}




}