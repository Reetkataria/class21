function isTouching(A,B)
{  if (A.x - B.x < B.width/2 + A.width/2
  && B.x - A.x < B.width/2 +A.width/2
  && A.y - B.y < B.height/2 + A.height/2
  && B.y - A.y < B.height/2 + A.height/2) {
return true;
}
else {
return false;
}

}
