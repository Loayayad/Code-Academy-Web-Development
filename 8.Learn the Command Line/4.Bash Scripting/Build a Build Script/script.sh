#!/bin/bash
first_greeting="Nice to meet you!"
echo $first_greeting
# to read the first line from a file
firstline=$(head -n 1 source/changelog.md)
echo $firstline

#to spilit firstline into array
read -a splitfirstline <<< $firstline
echo ${splitfirstline[1]}

echo 'Do you want to continue? (enter "1" for yes, "0" for no)'
read versioncontinue

if [ $versioncontinue -eq 1 ]
then
  for filename in source/*
  do
    echo $filename
    if [ "$filename" == "source/secretinfo.md" ]
    then
      echo 'this file is not being copied.'
    else
      echo 'this file is being copied.'
      cp $filename build/.
    fi
  done
  cd build/
  echo "Build version $version contains:"
  ls
  cd ..
else
  echo "Please come back when you are ready"
fi