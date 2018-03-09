
after run js-beautify, can do auto commit;

====
C:\Users\Luke.Chi\Documents\Work\YB_CashMPS\codebase\merge_test\trunk>svn commit * --message test --encoding UTF-8 --force-interactive
svn: Skipping argument: E200025: '.svn' ends in a reserved name
svn: E200009: Commit failed (details follow):
svn: E200009: 'C:\Users\Luke.Chi\Documents\Work\YB_CashMPS\codebase\merge_test\trunk\test_auto_commit.txt' is not under version control

C:\Users\Luke.Chi\Documents\Work\YB_CashMPS\codebase\merge_test\trunk>
C:\Users\Luke.Chi\Documents\Work\YB_CashMPS\codebase\merge_test\trunk>svn commit --message test --encoding UTF-8 --force-interactive
Sending        test_auto_commit.txt
Transmitting file data .done
Committing transaction...
Committed revision 14.
