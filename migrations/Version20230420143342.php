<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230420143342 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE app_letter_line (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) DEFAULT NULL, position INT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE app_letter ADD letterLine_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE app_letter ADD CONSTRAINT FK_6B01838A7DBEFB0A FOREIGN KEY (letterLine_id) REFERENCES app_letter_line (id)');
        $this->addSql('CREATE INDEX IDX_6B01838A7DBEFB0A ON app_letter (letterLine_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE app_letter DROP FOREIGN KEY FK_6B01838A7DBEFB0A');
        $this->addSql('DROP TABLE app_letter_line');
        $this->addSql('DROP INDEX IDX_6B01838A7DBEFB0A ON app_letter');
        $this->addSql('ALTER TABLE app_letter DROP letterLine_id');
    }
}
