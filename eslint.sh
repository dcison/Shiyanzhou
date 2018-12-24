list=$@;

if [[ "$list" = "" ]]; then
  exit 0
fi

PASS=true;
index=0;

echo $list

for FILE in ${list[*]}
do
  ./node_modules/.bin/eslint --fix --config=./.eslintrc.json \
  --ignore-path=./.eslintignore --ext=.js \
  --color "$FILE";

  if [[ "$?" != 0 ]]; then
    echo "ESLint Failed: $FILE"
    PASS=false
  fi
done

echo "Javascript 语法检验完成!"

if ! $PASS; then
  echo -e "不能提交！: 因为你的代码没能完全通过Eslint的校验~，请认真改改哦"
  exit 1
else
  echo "你的代码写的太棒了，完全没问题！！"
fi
exit $?
